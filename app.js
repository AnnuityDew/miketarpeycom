require('dotenv').config();
const express = require('express');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const { ExpressOIDC } = require('@okta/oidc-middleware');

const templateDir = path.join(__dirname, 'public', 'views');
const frontendDir = path.join(__dirname, 'public', 'assets');
const sampleConfig = require('./config.js');

function MikeTarpeyCom(sampleConfig, extraOidcOptions) {

    const oidc = new ExpressOIDC(Object.assign({
        issuer: `${process.env.OKTA_ORG_URL}/oauth2/default`,
        client_id: process.env.OKTA_CLIENT_ID,
        client_secret: process.env.OKTA_CLIENT_SECRET,
        appBaseUrl: 'http://localhost:3000',
        redirect_uri: process.env.REDIRECT_URL,
        routes: sampleConfig.oidc.routes,
        scope: 'openid profile',
        testing: sampleConfig.oidc.testing,
    }, extraOidcOptions || {}));

    const app = express();

    // session support is required to use ExpressOIDC
    app.use(session({
        secret: process.env.SECRET_KEY,
        resave: true,
        saveUninitialized: false
    }));

    const displayConfig = Object.assign(
        {},
        sampleConfig.oidc,
        {
            clientSecret: '****' + sampleConfig.oidc.clientSecret.substr(sampleConfig.oidc.clientSecret.length - 4, 4)
        }
    );

    app.locals.oidcConfig = displayConfig;

    // ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
    app.use('/assets', express.static(frontendDir));
    app.engine('mustache', mustacheExpress());
    app.set('view engine', 'mustache');
    app.set('views', templateDir);
    app.use(oidc.router);

    app.use(cors());
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, 'public-react')));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, './public-react/home.html'));
    });

    app.get('/blog', oidc.ensureAuthenticated(), (req, res) => {
        res.sendFile(path.join(__dirname, './public-react/blog.html'));
    });

    app.get('/menu', oidc.ensureAuthenticated(), (req, res) => {
        const template = 'home';
        const userinfo = req.userContext && req.userContext.userinfo;
        res.render(template, {
            isLoggedIn: !!userinfo,
            userinfo: userinfo
        });
    });

    app.get('/menu/profile', oidc.ensureAuthenticated(), (req, res) => {
        // Convert the userinfo object into an attribute array, for rendering with mustache
        const userinfo = req.userContext && req.userContext.userinfo;
        const attributes = Object.entries(userinfo);
        res.render('profile', {
            isLoggedIn: !!userinfo,
            userinfo: userinfo,
            attributes
        });
    });

    app.get('/admin', oidc.ensureAuthenticated(), (req, res) => {
        res.sendFile(path.join(__dirname, './public-react/admin.html'));
    });

    oidc.on('ready', () => {
        // eslint-disable-next-line no-console
        app.listen(sampleConfig.port, () => console.log(`Mike Tarpey's blog started at http://localhost:${sampleConfig.port}`));
    });

    oidc.on('error', err => {
        // An error occurred with OIDC
        // eslint-disable-next-line no-console
        console.error('OIDC ERROR: ', err);

        // Throwing an error will terminate the server process
        // throw err;
    });
}

// run the app!
new MikeTarpeyCom(sampleConfig.webServer);

/**
const oidcMiddlewareConfig = {
    routes: {
        login: {
            viewHandler: (req, res) => {
                const baseUrl = url.parse(sampleConfig.webServer.oidc.issuer).protocol + '//' + url.parse(sampleConfig.webServer.oidc.issuer).host;
                // Render your custom login page, you must create this view for your application and use the Okta Sign-In Widget
                res.render('custom-login', {
                    csrfToken: req.csrfToken(),
                    baseUrl: baseUrl
                });
            }
        }
    }
};


 * Bootstrap the sample web server with the additional configuration for the custom login page
 */
// new SampleWebServer(sampleConfig.webServer, oidcMiddlewareConfig, 'custom-login-home');
