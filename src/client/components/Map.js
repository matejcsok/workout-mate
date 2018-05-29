import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
constructor(props) {
    super(props);
    this.state = {
        center: {
            lat: 47.49801,
            lng: 19.03991
        },
        zoom: 8
    };

}
    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '500px', width: '1200px', margin: 'auto' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDcuLUve3hlxwXsat7XVaJIsECy1ZCePHg' }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                    <AnyReactComponent
                        lat={47.49801}
                        lng={19.03991}

                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;