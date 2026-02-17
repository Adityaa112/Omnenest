import { useNavigate } from 'react-router-dom';

function ButtonComponent({ type = "button", onClick, disabled, children }) {
    const navigate = useNavigate();

    const handleClick = () => alert("Button clicked!");
    const message = () => alert("This is a message!");
    
    const showTime = () => {
        const currentTime = new Date().toLocaleTimeString();
        alert(`Current time: ${currentTime}`);
    };

    const showTOC = () => {
        let seconds = 5;
        console.log("Timer started...");
        const id = setInterval(() => {
            seconds -= 1;
            console.log(`Navigating in ${seconds} seconds...`);
            if (seconds <= 0) {
                clearInterval(id);
                navigate('/toc'); // Matches the route in App.jsx
            }
        }, 1000);
    };

    return (
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
            <h1>Event Handler Demo</h1>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button onClick={handleClick}>Click me</button>
                <button onClick={message}>Show Message</button>
                <button onClick={showTime}>Show Time</button>
                <button onClick={showTOC}>Go to TOC (5s Delay)</button>
                
                {/* The Dynamic Button from Props */}
                <button type={type} onClick={onClick} disabled={disabled}>
                    {children || "Default Button Text"}
                </button>
            </div>
        </div>
    );
}

export default ButtonComponent;