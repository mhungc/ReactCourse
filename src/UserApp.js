import React from 'react';
import UserList from './UserList';

class UserApp extends React.Component {
    constructor(){
        super();
        this.state = {
            users: [
                {id: 1, name: "miguel", email: "test@miguelgomez.io"},
                {id: 2, name: "test", email: "test@test.es"}
            ]
        };
    }

    render(){
        return (
            <UserList users={this.state.users}/>
        );
    }
}

export default UserApp;