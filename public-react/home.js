const e = React.createElement;

const AppFront = () => (
    <p>
        This page is coming soon! For now, check out what I'm building at <a class="inline" href="https://tarpey.dev">tarpey.dev</a>.
    </p>
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