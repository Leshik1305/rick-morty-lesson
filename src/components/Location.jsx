import { useEffect, useState } from "react";
import { fetchLocations, fetchLocationsById } from "../api";
import "./Location.css"

export const Location = () =>{
    const [locations, setLocations] = useState([]);
    const [locationById, setlocationById] = useState({});


    useEffect(() => {
        fetchLocations().then((data) => {
            console.log(data)
            setLocations(data);
        })
    }, [])

    const handleLocationClick = (location) => {
      const id = location.id
      console.log(id)
      
    
        fetchLocationsById(id).then((data) => {
            console.log(data);
            setlocationById({...locationById, [location.id]:data});
        })
    }
    


    return (
        <div>
            {locations.map((location) => {
                return (
                    <div key={location.id} 
                        className = 'location'
                    onClick = {() => handleLocationClick(location)}
                    >
                        <h3>{location.id + ": " + location.name}</h3>
                        <div className = "locations-container">
                            {locationById.id}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
