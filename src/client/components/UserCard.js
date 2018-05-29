import React from 'react'
import {Card, Icon} from 'semantic-ui-react'

const UserCard = (props) => (
    <Card>
        <img src="/public/img/avatar.jpeg" />
        <Card.Content>
            <Card.Header>
                {props.firstName + ' ' + props.secondName}
            </Card.Header>
            <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
            </Card.Meta>
            <Card.Description>
                {props.description}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user'/>
                22 Friends
            </a>
        </Card.Content>
    </Card>
);

export default UserCard