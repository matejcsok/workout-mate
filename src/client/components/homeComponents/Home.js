import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import SimpleMap from './Map';
import Autocomplete from 'react-google-autocomplete';
import {connect} from "react-redux";
import {postLogin} from "../../redux/actions/userAction";


class Home extends Component {
constructor(props) {
    super(props);
    this.state = {
        lat: 0,
        lng: 0,
    }
}

    render() {
        if (this.props.auth === false) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <Autocomplete
                    style={{width: '80%', margin: 'auto'}}
                    onPlaceSelected={(place) => {
                        console.log(place.formatted_address);
                        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${place.formatted_address}&key=AIzaSyDcuLUve3hlxwXsat7XVaJIsECy1ZCePHg`)
                            .then(res => {
                                this.setState({
                                    lat: res.data.results[0].geometry.location.lat,
                                    lng: res.data.results[0].geometry.location.lng
                                })
                            })
                    }}
                    types={['(regions)']}
                    componentRestrictions={{country: "hu"}}
                />

                <SimpleMap lat={this.state.lat} lng={this.state.lng}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(Home);