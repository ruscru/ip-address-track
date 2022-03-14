import {useContext} from "react"

import { DataContext } from './DataContext';
import classes from "./IpAddress.css"

const IpAddress = () =>{

    const {ipAddressDict} = useContext(DataContext); 
    
    return (       
            <div className="DataIpInfo">
                <div className="section">
                    <h5>IP ADDRESS:</h5>
                    <h2>{ipAddressDict.query}</h2>
                    
                </div>
                <div className="verticalLine"></div>
                <div className="section">
                    <h5>LOCATION:</h5>
                    <h2>{ipAddressDict.city}, {ipAddressDict.country}</h2>
                </div>
                <div className="verticalLine"></div>
                <div className="section">
                    <h5>TIME ZONE:</h5>
                    <h2>{ipAddressDict.timezone}</h2>
                </div>
                <div className="verticalLine"></div>
                <div className="section">
                    <h5>ISP:</h5>
                    <h2>{ipAddressDict.isp}</h2>
                </div>            
            </div> 
        
                                    
          
    );     
   
}

export default IpAddress