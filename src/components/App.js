// create your App component here
import React, {useEffect,useState} from "react";

const API ='https://dog.ceo/api/breeds/image/random'

function  DogImage() {

    const[image , setImage] = useState(null) 
    useEffect(()=>{
        fetch (API)
        .then(res=>res.json())
        .then(data=>setImage(data.message))

    },[])

    if(!image){
        return <p>"Loading ..."</p>
    }
    return(
    <div>
        <p>loading...</p>
        <img src={image} alt="A Random Dog"/>

    </div>
    );
}
export default DogImage

