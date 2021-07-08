import { useState, useEffect } from 'react';


function Show({ match, history, roommates, updateEmail }) {
    // if(!user) return <Redirect to="/login" />
    const [ editForm, setEditForm ] = useState({
        name: '',
        email: ''
        
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
                <h1>{roommate.name}</h1>
                <h2>{roommate.email}</h2>
                
            </div>
        );
    }
    const handleChange = (event) => {
        setEditForm({...editForm, [event.target.name]: event.target.value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const {_id, name, email} = editForm;
        updateEmail({ name, email }, _id);
    }

    
    // note
    return (
        <div>
            {roommate ? loaded() : loading()}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    value={editForm.name} 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    name="email" 
                    value={editForm.email} 
                    onChange={handleChange} 
                />

                <input type="submit" value="Edit Email" />
            </form>
        </div>
    );
}
export default Show;