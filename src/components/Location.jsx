import { useEffect, useState } from "react";
import { fetchLocations, fetchCharacters } from "../api";
import "./Location.css"

export const Location = () =>{
    const [locations, setLocations] = useState([]);
    const [charactersByLocations, setCharactersByLocations] = useState({});


    useEffect(() => {
        fetchLocations().then((data) => {
            console.log(data)
            setLocations(data);
        })
    }, [])

    const handleLocationClick = (location) => {
        const ids = location.residents.map((resident) => {
            const id = resident.split("/").pop();
            return id
        });
        fetchCharacters(ids).then((data) => {
            console.log(data);
            setCharactersByLocations({ ...charactersByLocations, [location.id]: data });
      });
    }
    


    return (
        <div>
            {locations.map((location) => {
                return (
                    <div 
                        key={location.id} 
                        className = 'location'
                        onClick = {() => handleLocationClick(location)}
                    >
                        <h3>{location.id + ": " + location.name}</h3>
                        <div>
                            {charactersByLocations[location.id]?.map((character) => {
                                return(
                                    <div key={location.id + ":" + character}>
                                        {character.name}</div>
                            )

                        })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
