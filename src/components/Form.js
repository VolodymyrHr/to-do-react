import React, { Component } from 'react'

class Form extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          name: null
        };
      }
    

    onSubmitHendler = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            name: this.state.name
        })
    }

    onChangeHendler = (event) => {
        this.setState({name: event.target.value})
    }

    render(){
        return(
            <form name="task" onSubmit={this.onSubmitHendler}>
                <input type="text" name="name" placeholder="Whot to do?" autoFocus 
                    onChange={this.onChangeHendler}/>
                <button type="submit"><i className="fa fa-plus"></i></button>
            </form>
        );
    }
}

export default Form;