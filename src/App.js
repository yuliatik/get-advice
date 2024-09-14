import {useEffect, useState} from 'react';
import './App.css';

function App() {

    const[showAdvice, setShowAdvice] = useState([]);

    useEffect(() =>{
        const getAdvice = async() =>{
        const response = await fetch('https://bored.api.lewagon.com/api/activity');
        const data = await response.json();
        console.log(data.activity);
        setShowAdvice(data.activity);
        }
        getAdvice()
    }, [])

  
   
    return(
        <div className='App'>

            <div>
                <p>{showAdvice}</p>
            </div>

            <div>        
            <button onClick={setShowAdvice}>Get an advice</button>
            </div>

                   

        </div>
    )
 }
  export default App


 


