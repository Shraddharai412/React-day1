import react from 'react';

function Agenameusingprops(props)
{
    return (
        <div>
            <h1>name : {props.name}</h1>
            <p> Greet :{props.greet}</p>
            <p> Age : {props.age}</p>
        </div>
    )
}
export default Agenameusingprops;