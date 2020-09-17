import React, {Component} from 'react';
import './App.css';

import Task from './components/Task'

class App extends Component {

  tasks = [
    {
      id: 8,
      name: "Do homework",
      done: true,
      listId: 0
  },
  {
      id: 9,
      name: "Learn English",
      done: false,
      listId: 0
  },
  {
      id: 11,
      name: "Go to university",
      done: true,
      listId: 0
  }
  ];

  render(){
    return (
      <div className="App">
        <main>
          <form name="task">
              <input type="checkbox" name="done" id="done" value="true"/>
              <input type="text" name="name" placeholder="Whot to do?" autoFocus/>
              <button type="submit"><i className="fa fa-plus"></i></button>
          </form>
  
          <ul id="tasks">
            <Task task={this.tasks[0]}/>
            <Task task={this.tasks[1]}/>
            <Task task={this.tasks[2]}/>
          </ul>
      </main>
      </div>
    );
  }
}

export default App;
