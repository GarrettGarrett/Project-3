import { useState, useEffect } from 'react';
import Button from "@material-ui/core/Button";
import { Edit } from "@material-ui/icons";


function Show({ match, history, roommates, updateDescription }) {
    // if(!user) return <Redirect to="/login" />
    const [ editForm, setEditForm ] = useState({
        chore: '',
        choreDescription: '',
        choreImg: ''
        
    });
    const [roommate, setRoommate] = useState(null);
    useEffect(() => {
        if(roommates) {
            const id = match.params.id;
            const foundRoommate = roommates.find(p => p._id === id);
            setRoommate(foundRoommate);
            setEditForm(foundRoommate);
        }
    }, [roommates, match])
    const loading = () => {
        return <h1>Loading ...</h1>
    }
    const loaded = () => {
        return (
            <div className="chee">
                <h1>{roommate.chore}</h1>
                <img width="200" src={roommate.choreImg} alt={roommate.chore} />
                <h4>{roommate.choreDescription}</h4>
                
            </div>
        );
    }
    const handleChange = (event) => {
        setEditForm({...editForm, [event.target.name]: event.target.value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const {_id, chore, choreDescription, choreImg} = editForm;
        updateDescription({ chore, choreDescription, choreImg }, _id);
    }

    
    // note
    return (
        <div className="container">
            {roommate ? loaded() : loading()}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="chore" 
                    value=""
                    // value={editForm.chore} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    name="choreDescription" 
                    value={editForm.choreDescription} 
                    onChange={handleChange} 
                />

                {/* <input type="submit" value="Edit Description" /> */}

                <Button
                endIcon={<Edit />}
                size="large"
                type="submit"
                className='rotateWheelBtn'
                variant="contained" 
                color="secondary"
                onChange={handleChange} 
                onClick={() => handleSubmit}
                style={{
                    fontSize: 15,
                    margin: 15
                }}
                >
                Edit Description
                </Button>
            </form>




        </div>
    );
}
export default Show;