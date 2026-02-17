import { useNavigate } from 'react-router-dom';
import TOC from './TOC.jsx';
function ButtonComponent(){
    const navigate = useNavigate();

    const handleClick = () => {
        alert("Button clicked!");
    };
   
    const message = () =>{
        alert("This is a message!");
    };
 
    const showTime = () =>{
        const currentTime = new Date().toLocaleTimeString();
        alert(`Current time: ${currentTime}`);
    };

    const showTOC = () =>{
        let seconds = 5;
        const id = setInterval(() => {
            seconds -= 1;
            console.log(`TOC will be shown in ${seconds} seconds...`);
            if(seconds <= 0){
                clearInterval(id);
                navigate('/TOC');
            }
    },1000);
}
 
    return(
        <div>
            {" "}
            <h1>Event handler demo</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={message}>Show Message</button>
            <button onClick={showTime}>Show Time</button>
            {/* <button onClick={() => alert("Inline handler!")}>
                {" "}
                Inline Hanlder{""}
            </button> */}
            <button onClick={showTOC}>TOC</button>
        </div>
    );
}
 
export default ButtonComponent;
 