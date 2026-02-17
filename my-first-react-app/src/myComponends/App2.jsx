
function App2() {
  return (
    <div>
      {" "}
      <h1 style={{ color: "blue", fontSize: "32px", textAlign: "center" }}>
        {" "}
        Styled Heading{" "}
      </h1>{" "}
      <p
        style={{
          backgroundColor: "lightgreen",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {" "}
        This paragraph has a green background!{" "}
      </p>{" "}
      <button
        style={{
          backgroundColor: "purple",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {" "}
        Click Me{" "}
      </button>{" "}
    </div>
  );
}
export default App2;
