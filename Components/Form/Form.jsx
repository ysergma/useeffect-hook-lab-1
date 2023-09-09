import { useState } from "react";
import { useEffect } from 'react'
import DogList from "../DogList/DogList";


export default function Form() {
  const[NumberOfDogs,setNumberOfDogs]=useState("")
  // How can we manage the number of dogs?
  const [Dogs,setDogs]=useState([])
const fetchData= async()=> {
const response = await fetch("https://dog.ceo/api/breeds/image/random/"+inputText)
const newData = await response.json();
console.log(newData.message)
setDogs(newData.message)
console.log(Dogs)
}
 useEffect(()=>{
  fetchData
 },[NumberOfDogs] )

  const [inputText, setInputText] = useState("");
  return (
    <div>
<form>
      <h3>Number of cute dogs is infinite!</h3>
      <div className="mb-3">
        <label>Insert number of cute dogs</label>
        <input
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="d-grid">
        <button
          onClick={(e) => {
            e.preventDefault();
            // When we click on the WOOF! button, what happens?
            setNumberOfDogs(inputText)
            console.log(NumberOfDogs)
            fetchData()
          }}
          type="submit"
          className="btn btn-primary"
        >
          WOOF!
        </button>
      </div>
    </form>
    <DogList dogsList={Dogs} />
    </div>
    
  );
}
