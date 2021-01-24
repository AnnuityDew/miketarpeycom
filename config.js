require('dotenv').config();

var OKTA_ORG_URL = process.env.OKTA_ORG_URL;
var OKTA_CLIENT_ID = process.env.OKTA_CLIENT_ID;
var OKTA_CLIENT_SECRET = process.env.OKTA_CLIENT_SECRET;
var OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK ? true : false;
var PORT = process.env.PORT;

module.exports = {
    webServer: {
        port: PORT,
        oidc: {
            clientId: OKTA_CLIENT_ID,
            clientSecret: OKTA_CLIENT_SECRET,
            issuer: `${OKTA_ORG_URL}/oauth2/default`,
            appBaseUrl: 'http://localhost:3000',
            scope: 'openid profile email',
            routes: {
                loginCallback: {
                    afterCallback: '/admin'
                }
            },
            testing: {
                disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
            }
        },
    },
};
