import react from 'react';
function Rai()
{
    const isLoggedIn =true;

   return(
          <div>
            <h2>
                { isLoggedIn?"Welcome back!":"Please Log in"}
            </h2>
          </div>
   )
}
export default Rai;