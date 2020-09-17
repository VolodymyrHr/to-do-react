import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <form name="task">
            <input type="checkbox" name="done" id="done" value="true"/>
            <input type="text" name="name" placeholder="Whot to do?" autoFocus/>
            <button type="submit"><i className="fa fa-plus"></i></button>
        </form>

        <ul id="tasks">
          <li className="task">
            <input id="task-8" type="checkbox" name="list-one" value="true"/>
            <label htmlFor="task-8">Do homework</label>
            <button>
              <i id="delete-8" className="fa fa-times"></i>
            </button>
          </li>
        </ul>
    </main>
    </div>
  );
}

export default App;
