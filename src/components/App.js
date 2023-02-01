// create your App component here
import React, {useEffect,useState} from "react";

const API ='https://dog.ceo/api/breeds/image/random'

function DogImage (){
    const [image, setImage] = useState("")
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        fetch(API)
        .then ((res) => res.json())
        .then((data) => {
        setImage(data.message)
        setLoading(false)
    })
    },[])
        return (
            <p>
                {isLoading && <span>Loading...</span>}
                {image && <img src={image} alt= "A Random Dog"></img>}
            </p>
        );
      
}
export default DogImage

