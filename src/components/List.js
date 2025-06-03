import react from "react";

function Appp()
{
  const fruits=["Appple","banana","Cheery","dates"]
  return(
    <div>
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((fruit,index) =>(
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>

  )
}
export default Appp;