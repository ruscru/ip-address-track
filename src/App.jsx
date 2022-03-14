import { useState, useEffect } from "react";
import Heading from './Components/Heading';
import Map from './Components/Map';
import { DataContext } from './Components/DataContext';
import './app.css';

function App() {
  const [ipAddressDict, setIpAddressDict] = useState({});

  const searchIp = (ipAddressDictL) => {
    console.log("metodo",ipAddressDictL);
    const url = "http://ip-api.com/json/" + ((typeof ipAddressDictL.query !== 'undefined') ? ipAddressDictL.query : "");
      
      fetch(url)
      .then((res) => {
          if(res.ok){
              setHttpError(null);
              return res.json();
          }else{
              throw Error ("Failed to fetch Ip Address")
          }
      })
      .then((data) => {
          console.log(data)
          setIpAddressDict(data);
      })
      .catch((error) => setHttpError("Failed to retrieve IP Address, please try again"))
  }
  
  const [httpError, setHttpError] = useState(null);
    useEffect(() => {
      searchIp({});
    }, [])
  
  return (
    <div className="App">
      <DataContext.Provider value={{ipAddressDict, setIpAddressDict}}>        
        <Heading searchIp={searchIp}/>        
        <Map />
    </DataContext.Provider>
    </div>
  );
}

export default App;
