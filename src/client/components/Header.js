import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

import {logOutAction} from '../redux/actions/userAction';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'logIn'
        }
    }


    handleItemClick(e, {name}) {
        if (this.props.auth === false) {
            this.setState({activeItem: 'logIn'})
        } else {
            this.setState({activeItem: name})
        }
    };


    render() {
        const Logout = () => {
            return (this.props.auth ?
                    <div>
                        <Menu.Item
                            name='logOut'
                            onClick={this.props.logOutAction}
                        >
                            LogOut
                        </Menu.Item>
                    </div>
                    : null
            )
        };

        const Login = () => {
            return (!this.props.auth ?
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
                    : null
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

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logOutAction})(Header);