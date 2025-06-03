import react from 'react';
import './usercard.css';

function UserCard({id,url,name,age,email})
{
    return (
        <div className='card'>
             <img src={url} alt ={`${name}`} className='cardimg'/>
             <h3><strong>Name:</strong>{name}</h3>
             <p><strong>Age:</strong>{age}</p>
             <p><strong>Email:</strong>{email}</p>
        </div>
    )
}
export default UserCard;