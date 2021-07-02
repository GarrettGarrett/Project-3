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
        const cloneChores = chores.slice();
        let first = cloneChores.shift();
        cloneChores.push(first);
        setChores(cloneChores)
        return chores;
    }

    
    useEffect(() => {
        getRoommates()
        getChores()
    }, []);

        const loading = () => {
            return <h1>Loading ...</h1>
        }
        const loaded = () => {
            return (
                <section>
                    {roommates.map((person, index) => (
                        <div key={person._id} className="person">
                            <h1>{person.name}</h1>
                            <h4>{chores[index]}</h4>
                        </div>
                    ))}

                    <div 
                        onClick={() => rotateChores()}
                        style={{
                            cursor: 'pointer',
                            marginRight: 10
                        }}>
                            Rotate Chores
                    </div>
                </section>
                
            );
        } 
    return (
        <div>
            {roommates&&chores ? loaded() : loading()}
        </div>
    )
    }

  export default Main;