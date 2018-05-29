import React, {Component} from 'react';
import UserCard from './UserCard'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            secondName: '',
            description: '',
        }
    }

    render() {
        return (
            <div className="container" style={divFlex}>

                <div style={{flex: '1'}}>
                    <UserCard
                        firstName={this.state.firsName} secondName={this.state.secondName}
                        description={this.state.description}/>
                </div>


                <div style={inputStyle} className="form-group">
                    <label htmlFor="firstName">Vezeték név:</label>
                    <input style={{marginBottom: '15px'}} className="form-control" type="text" placeholder="Vezeték név"
                           onChange={event => this.setState({firsName: event.target.value})}/>

                    <label htmlFor="secondName">Kereszt név:</label>
                    <input style={{marginBottom: '15px'}} className="form-control" type="text" placeholder="Kereszt név"
                           onChange={event => this.setState({secondName: event.target.value})}/>

                    <label htmlFor="description">Rövid leírás:</label>
                    <textarea style={{marginBottom: '15px'}} className="form-control" type="text" placeholder="Leírás"
                              onChange={event => this.setState({description: event.target.value})}/>

                    <button style={{float: 'right'}} className="btn btn-primary">Mentés</button>
                </div>


            </div>
        )
    }
}

export default Profile;

const inputStyle = {
    margin: 'auto',
    width: '40%'
};

const divFlex = {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
};