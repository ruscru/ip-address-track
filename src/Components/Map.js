import { useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import { DataContext } from './DataContext';
import './map.css';

const MarkerComponent = () => <div><img src="./assets/icon-location.svg" alt=""></img></div>;

const Map = () =>{
    const {ipAddressDict} = useContext(DataContext); 

    const defaultProps = {
        center: {
          lat: ipAddressDict.lat,
          lng: ipAddressDict.lon
        },
        zoom: 11
    };

    return (
        <div className="Map">
          <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyAhjF_GEw6Aw7U55BDS3DkxmTOqwRPBhTg' }}
              center={defaultProps.center}
              defaultZoom={defaultProps.zoom}
          >
            <MarkerComponent
                lat={ipAddressDict.lat}
                lng={ipAddressDict.lon}               
              />
          </GoogleMapReact>          
        </div>
      );

}

export default Map
