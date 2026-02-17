import { useState } from "react";

function NameForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };

 
  
  const isButtonDisable = password.length <= 13;

  
  const showConstraints = () => {
    alert("Password Constraints:\n- Must be more than 13 characters long.");
  };

  return (
    <div>
      <h3>Controlled Input Example</h3>
      
      <input 
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <div>
        <input 
          type={showPassword ? "text" : "password"} 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </button>
        
        {/* Information Button */}
        <button onClick={showConstraints} type="button">
          i
        </button>
      </div>
      
      <p>You typed: <strong>{name}</strong></p>
      <p>Character count: {name.length}</p>
      <p>Password length: {password.length}</p>

      <button disabled={isButtonDisable}>
        Submit
      </button>
    </div>
  );
}

export default NameForm;