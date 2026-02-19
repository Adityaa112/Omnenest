import useLocalStorage from "../hooks/useLocalStorage";

function NameSaver() {
    const [name, setName] = useLocalStorage("name", "");

    return (
        <div>
            <h2>Remember my name</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}   
                placeholder="Enter your name"
                style={{padding:"8px", fontSize:"16px"}}
            />
            {name && <h3 style={{marginTop:"20px"}}>Hello {name}!</h3>}
            <p>Press F5 to refresh the page and see your name remembered!</p>
        </div>
    );
}

export default NameSaver;
