import { useState } from "react";

const SetupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("ohh you have clicked me!!!! 👋🏻 ");
  }

  return (
    <>
      <h2> SignUp Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label><br/>
        <label>
          Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label><br/><br/>
        <button > Submit </button>
      </form>
    </>
  );
};

export default SetupForm;
