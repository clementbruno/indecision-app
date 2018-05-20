// Delete for single tasks is not working yet and must be fixed 

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: props.tasks
        };
        this.handleDeleteTasks = this.handleDeleteTasks.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleDeleteTasks() {
        this.setState(() => {
            return {
                tasks: []
            };
        });
    }

    handleDeleteTask(task) {
        const idx = this.state.tasks.indexOf(task);
        let newTasks = this.state.tasks;
        newTasks[idx] = "";
        this.setState((prevState) => {
            return {
                tasks: newTasks
            };
        });
    }

    handleAddTask(task) {
        if (!task) {
            return 'Enter valid value please';
        } else if (this.state.tasks.indexOf(task) > -1) {
            return 'This task is already in your list';
        } else {
            this.setState((prevState) => {
                return {
                    tasks: prevState.tasks.concat(task)
                };
            });
        }
    };

    render() {
        return (
            <div>
                <Header 
                    subtitle="You never had such a clear ToDo"
                />
                <Tasks 
                    tasks={this.state.tasks}
                    handleDeleteTasks={this.handleDeleteTasks}
                    handleDeleteTask={this.handleDeleteTask}
                />
                <AddTaskBtn handleAddTask={this.handleAddTask} />
            </div>
        )
    }
}

TodoApp.defaultProps = {
    tasks: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && (props.subtitle)}
        </div>
    );
};

Header.defaultProps = {
    title: "Task Manager"
};

const Tasks = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteTasks}>Remove all Tasks</button>
            {
                props.tasks.map((task) => <Task key={props.tasks.indexOf(task)} handleDeleteTask={props.handleDeleteTask} taskText={task} />)
            }
        </div>
    );
};

const Task = (props) => {

    return (
        <div>
            <p>{props.taskText}</p>
            <button onClick={props.handleDeleteTask}>Delete Task</button>
        </div>
    );
};

class AddTaskBtn extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddTask(e) {
        e.preventDefault();
        const input = e.target.elements.task.value.trim();
        const error = this.props.handleAddTask(input);

        this.setState(() => {
            return { error: error };
        });
    }
    
    render() {
        return (
            <div>
                {this.state.error && (<p>{this.state.error}</p>)}
                <form onSubmit={this.handleAddTask}>
                    <input type="text" name="task" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
};

ReactDOM.render(<TodoApp />, document.getElementById("app"));