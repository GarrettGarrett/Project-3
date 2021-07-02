import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../pages/Index';



function Main(props){
    const [ roommates, setRoommates ] = useState(null);
    const [ chores, setChores ] = useState(null);
    const URL = 'http://localhost:4000/roommates'

    // fetch people data from backend
    const getRoommates = async () => {
        const response = await fetch('http://localhost:4000/roommates');
        const data = await response.json();
        setRoommates(data)  
    }

    // fetch chore data from backend
    const getChores = async () => {
        const response = await fetch('http://localhost:4000/chores');
        const data = await response.json();
        setChores(data)
     }

    function rotateChores () {
        console.log(chores)
        let first = chores.shift();
        chores.push(first);
        console.log(chores)
        return chores;
    }

    useEffect(() => {
        getRoommates()
        getChores()
    }, []);



    return (
        <section>
            {roommates.map((person) => (
                <div key={person._id} className="person">
                    <h3>{person.name}</h3>
                    <h4>{chores[person.chartPosition]}</h4>
                </div>
            ))}

            <div 
                        onClick={rotateChores}
                        style={{
                            cursor: 'pointer',
                            marginRight: 10
                        }}>
                            Rotate Chores
            </div>
        </section>
        
    );
  } 


  export default Main;