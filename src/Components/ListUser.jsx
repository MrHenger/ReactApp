import React, {Component} from 'react'

export default class ListUser extends Component
{
    constructor(){
        super()
        this.state = {
            name: '',
            lastName: ''
        }

    }

    render(){
        return(
            <div className="card mt-5">
                <div className="card-header">
                    <h3 className="text-center">User list</h3>
                </div>
                <div className="card-body"></div>
            </div>
        );
    }
}
