import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../pages/Index';




function Main(props){
    const [ roommates, setRoommates ] = useState(null);
    const [ chores, setChores ] = useState(null);
    const [ direction, setDirection ] = useState(0);
    const ROOMMATES_URL = 'http://localhost:4000/roommates'
    const CHORES_URL = 'http://localhost:4000/chores'

    // fetch people data from backend
    const getRoommates = async () => {
        const response = await fetch(ROOMMATES_URL);
        const data = await response.json();
        setRoommates(data)  
    }

    // fetch chore data from backend
    const getChores = async () => {
        const response = await fetch(CHORES_URL);
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

    function rotateWheel () {
        const totalRoommates = parseInt(Object.keys(roommates).length);
        console.log(totalRoommates)
        setDirection(direction + (360/totalRoommates))
        
    }

    function rotateWheel () {
        const totalRoommates = parseInt(Object.keys(roommates).length);
        console.log(totalRoommates)
        setDirection(direction + (45))
        
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
                <section className='mainDiv'>
                    {/* {roommates.map((person, index) => (
                        <div key={person._id} className="person">
                            <h1>{person.name}</h1>
                            <h4>{chores[index]}</h4>
                        </div>
                    ))}

                    <div 
                        onClick={() => rotateChores()}
                        style={{
                            cursor: 'pointer',
                            marginRight: 10,
                            padding: 20
                        }}>
                            Rotate Chores
                    </div> */}



                    <div className="imgContainer">
                        <img 
                            className="roommates" 
                            src="https://i.imgur.com/Vd6r2nn.png" alt="" 
                            width="700"
                        />

                        <img 
                        className="chores" 
                        src="https://i.imgur.com/v0fob5o.png" alt="" 
                        width="600"
                        style={{ transform: `rotate(${direction}deg)` }}

                        />
                    </div>


        

                    <div 
                        className='rotateWheelBtn'
                        onClick={() => rotateWheel()}
                        style={{
                            cursor: 'pointer',
                            marginRight: 10,
                            padding: 20
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