import React, { Component } from "react";
import FormUser from './Components/FormUser';
import ListUser from './Components/ListUser';

export default class App extends Component {
	
	constructor()
	{
		const users = [
			{
				name: "Super",
				lastName: "Admin"
			}
		];

		super()
        this.state = {		
			users
		}

		this.addUser = this.addUser.bind(this);
		this.removeUser = this.removeUser.bind(this);
	};

	addUser(user)
	{
		this.setState({
			users: [...this.state.users, user]
		});
	};

	removeUser(index) {
		this.setState({
		  users: this.state.users.filter((e, i) => {
			return i !== index;
		  }),
		});
	  }

	render(){
		return (
			<div className="App">
				<div className="container">
					<div className="row">
						<div className="col">
							<ListUser users={this.state.users} remove={this.removeUser}/>
						</div>
						<div className="col">
							<FormUser save={this.addUser}/>
						</div>
					</div>
				</div>
				
			</div>
		)
	};
};


