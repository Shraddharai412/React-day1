import react,{useState} from "react";
function Counter()
{
    const[count, setCount] = useState(0);
    return (
        <div>
            <h2>Count:{count}</h2>
            <button onClick={() => setCount(count+1)}>Add 
            </button>

            <button onClick={()=>setCount(count-1)}>
                subtract
            </button>

            <button  onClick={()=> setCount(0)}>
                reset
            </button>
            
        </div>
    )
}
export default Counter;