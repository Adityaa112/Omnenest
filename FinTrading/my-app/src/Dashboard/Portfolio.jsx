function Portfolio({PorfilePic, name, age, value, onBack}) {
    return(
        <div>
            <h1>Portfolio</h1>
            <img src={PorfilePic} alt="Profile" />
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Value: {value}</p>
            <button onClick={onBack}>Back</button>
        </div>
    );
}

export default Portfolio;