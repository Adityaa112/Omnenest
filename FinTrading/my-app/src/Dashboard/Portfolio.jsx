import Card from "../Components/Card";

function Portfolio({ profilePic, name, age, value, onBack }) {
  return (
    <div>
      <h1>Portfolio</h1>

      <div style={{ display: "flex" }}>
        <Card>
          <img src={profilePic} alt="Profile" width="100" />
        </Card>

        <Card>
          <div>Name</div>
          <div>{name}</div>
        </Card>

        <Card>
          <div>Age</div>
          <div>{age}</div>
        </Card>

        <Card>
          <div>Value</div>
          <div>{value}</div>
        </Card>
      </div>

      <br />
      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default Portfolio;
