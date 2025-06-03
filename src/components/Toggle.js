import react ,{useState} from 'react';

function Toggle()
{
    const[isToggled, setIsToggled] = useState(false);
    return (
        <div>
        <button onClick={()=>setIsToggled(!isToggled)}>
            {isToggled ? "ON" : "OFF"}
        </button>
        {isToggled && <p>The button is ON</p>}
        </div>
    )
}
export default Toggle;