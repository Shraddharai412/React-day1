import react from 'react';

function ConditionalRenderingUsingProps({isLoggedIn})
{
    return (
        
            <div>
                 {isLoggedIn ? <h1>WelcomeUser!</h1> : <h1>Please Log In</h1>}

            </div>
             
    )
}
export default ConditionalRenderingUsingProps;