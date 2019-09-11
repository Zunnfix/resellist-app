import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../assets/sass/components/Maps.scss'
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 32.778,
      lng: -96.795
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="maps-wrap">
        <div className="maps">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyB-Wa4BvnrygzZtEUYLoaTU3VIM8RodIgg' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          />
        </div>
        <div className="text">
          Dallas, TX <span className="info">Map is approximate to keep the seller's location private</span>
        </div>
      </div>
    );
  }
}
 
export default Maps;