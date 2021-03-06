import React from 'react'
import UserList from './UserList'
import request from 'superagent'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        request
            .get('/users')
            .then(res => {
                this.setState({
                    users:res.body.users
                })
            })
    }


    render() {
        return (
            <div>
                <h1>React Users!</h1>
                {this.state.users.map((user)=>{
                    return <li key={user.id}>{user.name}</li>
                })}

            </div>
        )
    }
}
export default App
