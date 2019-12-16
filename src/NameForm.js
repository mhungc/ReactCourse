import React, {Component} from 'react';

class NameForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
        //gracias a esto funciona el onSubmit porque se hace el binding, es necesario ponerlo en javascript es automático
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('A name was submited: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
          <form onSubmit={this.handleSubmit}>
              <label>
                  Name:
                  <input type="text" value={this.state.value} onChange={this.handleChange}/>
              </label>
              <input type="submit" value="Submit"/>
          </form>  
        );
    }
}

export default NameForm;