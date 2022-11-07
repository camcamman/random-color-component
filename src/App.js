import React, {useState, useEffect} from "react";
import axios from "axios";

export default function App () {

    const [color, setColor] = useState("") 

    const api = axios.create({
        baseURL: `https://www.colr.org/json/color/`
    })

    useEffect(old => {
    api.get(`/random?timestamp=${new Date().getTime()}`)
    .then(color => {setColor ('#'+color.data.colors[0].hex); 
        console.log(color.data.colors[0].hex)}
    )        
    }, [0])
    
    return(
        <div 
            style={{
            backgroundColor: color,
            width: '100%',
            height: '100px'
          }}>background color here</div>
    )
}

// console.log(color.data.colors[0].hex)