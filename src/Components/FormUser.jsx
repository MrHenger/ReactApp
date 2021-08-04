import React, { Component } from "react";

export default class FormUser extends Component 
{
    constructor()
    {
        super()
        this.state = {
            name: '',
            lastName: ''
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const { name, value} = e.target;
        this.setState({[name]: value});
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.save(this.state);
        this.setState({
            name: '',
            lastName: ''
        })
    }

    render() {
        return(
            <div className="card mt-5">
                <div className="card-header">
                    <h3 className="text-center">User form</h3>
                </div>
                <div className="card-body">
                    <form className="form-group" onSubmit={this.handleSubmit}>
                        <input className="form-control my-2" type="text" name="name" placeholder="Name" onChange={this.handleInput}/>
                        <input className="form-control my-2" type="text" name="lastName" placeholder="LastName" onChange={this.handleInput}/>
                        <div className="d-flex justify-content-center">
                            <input className="btn btn-info my-2 " type="submit" value="Add User"/>
                        </div> 
                        
                    </form>
                </div>
            </div>
        )
    }
}