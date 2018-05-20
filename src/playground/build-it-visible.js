class Toggler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.toggleDetails = this.toggleDetails.bind(this);
    }
    toggleDetails() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleDetails}>{this.state.visible ? "Hide details" : "Show details"}</button>
                {this.state.visible && (
                    <p>Here are some details</p>
                )}
            </div>
        )
    }
}

ReactDOM.render(<Toggler />, document.getElementById("app"));

//Old version below:

// const appRoot = document.getElementById("app");

// let visible = false;

// const detailsToggler = () => {
//     visible = !visible;
//     render();
// }
// const render = () => {
//     const template = (
//         <div id="content">
//             <h1>Visibility toggle</h1>
//             <button onClick={detailsToggler}>
//                 {visible ? 'Hide details' : 'Show details'}
//             </button>
//             {visible && (
//                 <div>
//                     <p>Here are some details</p>
//                 </div>
//             )}  
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// render();