import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'home'
        };
    }

    handleItemClick (e, { name }) { this.setState({ activeItem: name });}

    render() {
        const { activeItem } = this.state;

        return (
            <Menu secondary>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick.bind(this)} />
                <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick.bind(this)} />
                <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick.bind(this)} />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick.bind(this)} />
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Header;