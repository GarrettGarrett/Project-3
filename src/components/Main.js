import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Button from "@material-ui/core/Button";
import { RotateRight } from '@material-ui/icons';




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
                            src="https://i.imgur.com/Xyt8l4q.png" alt="" 
                            width="700"
                        />

                        <img 
                        className="chores" 
                        src="https://i.imgur.com/0Pr87ea.png" alt="" 
                        width="600"
                        style={{ transform: `rotate(${direction}deg)` }}

                        />
                    </div>


        
                    <Button
                    endIcon={<RotateRight />}
                    size="large"
                    className='rotateWheelBtn'
                    variant="contained" 
                    color="secondary"
                    onClick={() => rotateWheel()}
                    style={{
                        fontSize: 15,
                        margin: 15
                    }}
                    >
                    Rotate Chores
                    </Button>

                    
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