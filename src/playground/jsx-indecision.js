console.log('App.js is running!');

const app = {
    title: "Indecision app",
    subtitle: "Put your life in the hand of a computer",
    options: []
};

const appRoot = document.getElementById("app");
// other JS vanilla selector: document.querySelector("#app");

const formSubmit = (e) => {
    //line below prevents default full-page reloading
    e.preventDefault();
    //line below we take the target of the event = the form
    //then we retrieve the value of the element with the name option
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        //clean the input zone
        e.target.elements.option.value = '';
        run();
    }
};

const reset = () => {
    app.options = [];
    run();
};

const makeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length);
    const selectedOption = app.options[randNum];
    alert(selectedOption);
};

const numbers = [55, 101, 9000];

const run = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={reset}>Reset</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={formSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

run();