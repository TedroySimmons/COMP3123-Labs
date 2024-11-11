import React, { Component } from 'react'

export default class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            firstname: ''
        }
    }
    handleClick(e) {
        alert(`Hello World: ${e.target.name} - ${e.target.value}`)
    }

    handelInput = (e) => {
        const { name, value } = e.target

        this.setState({
            ...this.state,
            [name]: value
        })
        console.log(`${this.state.firstname}`)
    }

    render() {
    return (
      <div>
        <h2>Login</h2>
        First Name: <input type='text' name='firstname' value={this.state.firstname} onChange={this.handelInput} placeholder='Enter First Name'></input>
        Last Name: <input type='text' name='lastname' value={this.state.lastname} onChange={this.handelInput} placeholder='Enter Last Name'></input>
        <button value='Test' name='btnSubmit' onClick={this.handleClick}>Submit</button>
        <p>{ this.state.firstname }</p>
        <p>{ this.state }</p>
      </div>
    )
  }
}
