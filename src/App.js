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
          this.setState({ tasks: data })
        });
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

  patchTask = (idTask, done, taskEndpoints) => {
    return fetch(taskEndpoints + "/" + idTask, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(done)
                })
                .then(response => response.json())
              }

  deleteTask = (idTask, taskEndpoints) => {
    return fetch(taskEndpoints + '/' + idTask, {
                    method: 'DELETE'
                })
                .then(response => response.json())
              }

  createTask = (task) => {
    const {tasks, taskEndpoints} = this.state;
    this.postTask(task, taskEndpoints).then(task => this.setState({tasks: [...tasks, task]}));
  }

  onChangeDone = (task) => {
    const {taskEndpoints} = this.state;
    this.patchTask(task.id, {done: task.done}, taskEndpoints)
  }

  onClickDelete = (idTask) => {
    const {tasks, taskEndpoints} = this.state;
    this.deleteTask(idTask.id, taskEndpoints).then(task => this.setState({tasks: [...tasks.filter(el => el.id !== idTask.id)]}))
  }

  render(){
    const {tasks} = this.state;
    return (
      <div className="App">
        <main>
          <Form onSubmit={this.createTask}/>
          <TaskList tasks={tasks} onChange={this.onChangeDone} onClick={this.onClickDelete}/>
        </main>
      </div>
    );
  }
}

export default App;
