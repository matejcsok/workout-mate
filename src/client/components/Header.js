import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'logIn'
        }
    }


    handleItemClick(e, {name}) {
        this.setState({activeItem: name})
    }

    render() {

        const Logout = () => {
            return (
                <div>
                    <Menu.Item
                        name='logOut'
                        onClick={this.handleItemClick.bind(this)}
                    >
                        LogOut
                    </Menu.Item>
                </div>
            )
        };

        const Login = () => {
            return (
                <div>
                        <Menu.Item
                            as={Link} to='/'
                            name='logIn'
                            active={activeItem === 'logIn'}
                            onClick={this.handleItemClick.bind(this)}
                        >
                            Login
                        </Menu.Item>
                </div>
            )
        };

        const {activeItem} = this.state;

        return (
            <Menu>
                    <Menu.Item
                        as={Link} to='/home'
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick.bind(this)}
                    >
                        Home
                    </Menu.Item>

                    <Menu.Item
                        as={Link} to='/profile'
                        name='profile'
                        active={activeItem === 'profile'}
                        onClick={this.handleItemClick.bind(this)}
                    >
                        Profile
                    </Menu.Item>

                <Menu.Menu position='right'>
                    <Logout/>
                    <Login/>
                </Menu.Menu>

            </Menu>
        )
    }
}