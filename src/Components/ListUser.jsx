import React, {Component} from 'react'

export default class ListUser extends Component
{
    constructor(){
        super()
        this.state = {
            name: '',
            lastName: ''
        };
    }

    handleRemove(index)
    {
        this.props.remove(index);
    }

    render(){

        const users = this.props.users.map((user, key) => {
            return (
                <div className="col" key={key}>
                    <div className="card my-3">
                        <div className="card-header text-center">
                            User {key + 1}
                        </div>
                        <div className="card-body row">
                            <div className="col-6">
                                <p className="mt-3 ">Name: {user.name}</p>
                                <p className="mt-3 ">LastName: {user.lastName}</p>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <div className=" d-flex align-items-center">
                                    <button className="btn btn-info" onClick={this.handleRemove.bind(this, key)}>Remove</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            )
        })

        return(
            <div className="card mt-5">
                <div className="card-header">
                    <h3 className="text-center">User list</h3>
                </div>
                <div className="card-body">
                    {users}
                </div>
            </div>
        );
    }
}
