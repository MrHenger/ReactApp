import React, { Component } from "react";
import FormUser from './Components/FormUser';
import ListUser from './Components/ListUser';

export default class App extends Component {
	
	constructor()
	{
		const users = [
			{
				name: 'Admin',
				lastName: 'Admin'
			}
		];

		super()
        this.state = {
			users
		}

		this.addUser = this.addUser.bind(this)
	}

	addUser(user)
	{
		console.log(user);
		this.setState({
			users: [...this.state.users, user]
		});
	}

	render(){
		return (
			<div className="App">
				<div className="container">
					<div className="row">
						<div className="col">
							<ListUser/>
						</div>
						<div className="col">
							<FormUser save={this.addUser}/>
						</div>
					</div>
				</div>
				
			</div>
		)
	}
}


