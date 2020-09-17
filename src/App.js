import React, {Component} from 'react';
import './App.css';

import TaskList from './components/TaskList'
import Form from './components/Form'


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: [],
      taskEndpoints: "http://localhost:5000/api/tasks"
    };
  }

  componentDidMount() {
    fetch(this.state.taskEndpoints)
        .then(response => response.json())
        .then(data => {
          this.setState({ tasks: data })});
  }

  postTask = (task, taskEndpoints) => {
    return fetch(taskEndpoints, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(task)
                })
                .then(response => response.json())
  }

  createTask = (task) => {
    const {tasks, taskEndpoints} = this.state;
    this.postTask(task, taskEndpoints).then(task => this.setState({tasks: [...tasks, task]}));
  }

  render(){
    const {tasks} = this.state;
    return (
      <div className="App">
        <main>
          <Form onSubmit={this.createTask}/>
          <TaskList tasks={tasks}/>
        </main>
      </div>
    );
  }
}

export default App;
