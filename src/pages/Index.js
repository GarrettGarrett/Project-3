import { useState } from "react";
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button";
import { RotateRight } from '@material-ui/icons';
import { Email } from "@material-ui/icons"; 


function Index(props){
  const loading = () => {
    return <h1>Loading ...</h1>
}
const loaded = () => {
    return (
        <main className='mainDiv'>

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
                    src="https://i.imgur.com/at1BX4Z.png" alt="" 
                    width="700"
                />

                <img 
                className="chores" 
                src="https://i.imgur.com/5GTwgjO.png" alt="" 
                width="500"
                style={{ 
                  transform: `rotate(${props.direction}deg)`,
                  transitionDuration: `1.5s`
                  
                 }}

                />
            </div>

            <Button
                endIcon={<RotateRight />}
                size="large"
                className='rotateWheelBtn'
                variant="contained" 
                color="secondary"
                onClick={() => props.rotateWheel()}
                style={{
                    fontSize: 15,
                    margin: 15
                }}
                >
                Rotate Chores
            </Button>

            <Button
                endIcon={<Email />}
                size="large"
                className='rotateWheelBtn'
                variant="contained" 
                color="primary"
                onClick={() => alert("This is a future enhancement")}
                style={{
                    fontSize: 15,
                    margin: 15
                }}
                >
                Notify Everyone
            </Button>

        </main>
    
    );
} 
return (
<div>
    {props.roommates&&props.chores ? loaded() : loading()}
</div>
)
}
  
  export default Index;