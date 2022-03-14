import { useState} from "react"
import IpAddress from './IpAddress';

import "./heading.css"

const Heading = ({searchIp}) => {

    const [search, setSearch] = useState();
    
    const onChange = (e) => {
        setSearch(e.target.value);        
      };

    const handleButton = (e) =>{
        e.preventDefault();
        const ipAddressDictLocal = {
            query : search
        };
        
        searchIp(ipAddressDictLocal);
    }


    
    return (
        <div className="heading">
            <h1>IP Address Tracker</h1>
            <div className="search">
                <form>
                    <input placeholder="Search for any IP address or domain" name="search" onChange={onChange}/>
                    <button onClick={handleButton}>
                        <img src="assets/icon-arrow.svg" alt=""></img>
                    </button>
                </form>
            </div>
            <IpAddress />
        </div>
    );



}

export default Heading