const e = React.createElement;

const AppFront = () => (
    <section>
        <h1>mike tarpey</h1>
        <h4>future contents: about me, blog, etc.</h4>
        <p>
            This page is coming soon! For now, check out what else I'm building at <a class="inline" href="https://tarpey.dev">tarpey.dev</a>.
        </p>
    </section>
);

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AppFront />
            </div>
        );
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Home), domContainer);