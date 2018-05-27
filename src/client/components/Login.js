import React, {Component} from 'react'
import {Input, Button} from 'semantic-ui-react'
import {postLogin} from '../redux/actions/userAction';
import {connect} from 'react-redux';
import axios from "axios/index";
import userReducer from "../redux/reducers/userReducer";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    onSubmit(event) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.password !== '' && re.test(this.state.email)) {
            this.props.postLogin(this.state.email, this.state.password)
        } else console.log('szar')

    }

    render() {
        return (
            <div>
                <h1 style={{marginLeft: '30px'}}>Login</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div style={inputStyle} className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input style={{marginBottom: '10px'}} className="form-control" type="text" placeholder='E-mail' onChange={event => this.setState({email: event.target.value})}/>
                        <label htmlFor="pwd">Password:</label>
                        <input style={{marginBottom: '10px'}} className="form-control" type="password" placeholder='Password'
                               onChange={event => this.setState({password: event.target.value})}/>
                        <Button primary>LogIn</Button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    postLogin: userReducer
});

export default connect(mapStateToProps, {postLogin})(Login)

const inputStyle = {
    margin: 'auto',
    width: '40%'
};