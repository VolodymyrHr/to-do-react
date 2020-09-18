import { render } from '@testing-library/react';
import React, {Component} from 'react'

class Task extends Component{
    constructor(props){
        super(props)

        this.state = {
            checked: this.props.task.done
        }
    }

    onChangeHendler = (event) => {
        this.props.onChange({id: event.target.id, done: event.target.checked})
        this.setState({checked: event.target.checked})
    }

    onClickHendler = (event) => {
        this.props.onClick({id: parseInt(event.target.parentNode.id)})
    }

    render(){
        return (<li className="task">
                <input 
                    id={this.props.task.id}
                    type="checkbox" 
                    name="list-one" 
                    value="true" 
                    checked={this.state.checked}
                    onChange={this.onChangeHendler}/>
                <label htmlFor={this.props.task.id}>
                    {this.props.task.name}
                </label>
                <button 
                    id={this.props.task.id} 
                    onClick={this.onClickHendler}>
                    <i className="fa fa-times"></i>
                </button>
            </li>
            );
    }
}

export default Task;