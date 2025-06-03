import react from 'react';
function InLineStyling()
{
    const isImportant =true;
    const styleObj = {
        color : isImportant ? 'green' :'red',
        fontWeight : isImportant ? 'bold' : 'nomral',
        backgroundColor : 'lightyellow',
        padding : '10px',
        borderRadius : '5px',
    }
    return (
        <div style ={styleObj}>
            <h1>Important Notice</h1>
            <p> This block is for JSX Styling</p>
        </div>
    )
}
export default InLineStyling;