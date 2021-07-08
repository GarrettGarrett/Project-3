import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Index from '../pages/Index';
import Show from "../pages/Show";
import Button from "@material-ui/core/Button";
import { RotateRight } from '@material-ui/icons';






function Main(props){
    const [ roommates, setRoommates ] = useState(null);
    const [ chores, setChores ] = useState(null);
    const [ direction, setDirection ] = useState(0);
    const URL = 'http://localhost:4000/roommates/'
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

    // function rotateWheel () {
    //     const totalRoommates = parseInt(Object.keys(roommates).length);
    //     console.log(totalRoommates)
    //     setDirection(direction + (360/totalRoommates))
        
    // }

    function rotateWheel () {
        const totalRoommates = parseInt(Object.keys(roommates).length);
        console.log(totalRoommates)
        setDirection(direction + (45))
        
    }

    const updateDescription = async (roommate, id) => {
        //   make put request to create cheese
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(roommate),
    
            });
            getRoommates();
        }

    useEffect(() => {
        getRoommates()
        getChores()
    }, []);


    return (
        <main>
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Index roommates={roommates} 
            direction={direction} 
            chores={chores} 
            getChores={getChores}
            rotateChores={rotateChores} 
            rotateWheel={rotateWheel} 
            updateDescription={updateDescription}         
            />
          </Route>
          
          <Route
            path="/roommates/:id"
            render={rp => (
              <Show
              roommates={roommates}
              getRoommates={getRoommates}
              getChores={getChores}
              rotateChores={rotateChores} 
              rotateWheel={rotateWheel} 
              updateDescription={updateDescription}                
                {...rp}
              />
            )}
          />
        </Switch>
        </BrowserRouter>
      </main>
      );
    }
    
    export default Main;