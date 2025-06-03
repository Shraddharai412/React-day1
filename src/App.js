import react from 'react';
import Agenameusingprops from './components/agenameusingprops';
import Rai from './components/ConditionalRender';
import ConditionalRenderingUsingProps from './components/ConditionalRenderingUsingProps';
import Appp from './components/List';
import InLineStyling from './components/InLineStyling';
import Propsexample from './components/Propsexample';
import Propswithjsx from './components/Propswithjsx';
import users from './components/data';
import UserCard from './components/UserCard';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import ThemeToggle from './components/ThemeToggle';


function App()
{
    // return (

    //   //this is a simple React component day 1 task1
    //     <div>
    //         <h1>Welcome to React</h1>
    //         <p>This is a simple React application.</p>
    //         <p>Enjoy learning React!</p>
    //     </div>
    // );
   // task 2
    // return(
    //   //simple variable declaration and usage
    //     <div>
            
    //         <p>My name is: {'John Doe'}</p>
    //         <p>My age is: {25}</p>
    //     </div>
    // )
    //task 3
    // return(
    //   <Rai/>
    // )
    //task 4
    // return(
    //   <ConditionalRenderingUsingProps isLoggedIn={true} />
    // )
    //task 5
    // const myProps = { name: 'Shraddha Rai', greet: 'Hello', age: '19' };
    // return(
    //       <Agenameusingprops {...myProps} />
    // )
    ///task 6
    // return(
    //   <Appp />
    // )
    //task 7
    // return(
    //   <InLineStyling />
    // )
    //task 8
    // return(
    //   <Propsexample name="Shraddha Rai" />
    // )
    //task 9
    // const message = "Hello, this is a message passed as a prop!";
    // return(
    //   <Propswithjsx message={message} />
    // )
    //task 10
    // return (
    //     <div className='card-container'>
    //         {users.map(user => (
    //             <UserCard 
    //                 key={user.id} 
    //                 id={user.id}
    //                 url={user.url}
    //                 name={user.name} 
    //                 age={user.age} 
    //                 email={user.email} 
                    
    //             />
    //         ))}
    //     </div>
    // );
    // //task 11
    //  return(
    //     <Counter />
    //  )
    //task 12
    // return(
    //   <Toggle />
    // )
    //task 13
    return(
        <ThemeToggle />
    )
   


}
export default App;