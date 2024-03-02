import React,{useState} from "react";
import axios from "axios";
function SignInForm() {
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: ""});
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const login = async (e) => {
    console.log("event sent : ", e.target);
    e.preventDefault()
    try {
        const response = await axios.post('http://localhost:8080/login', state)
        console.log('SERVER RESPONSE:', response.data)
         localStorage.setItem('token', response.data.token)
          window.location.href = '/home';
    } catch (error) {
        console.log("Error:", error.response.data);
        let tempErrors = {}
        for (let key of Object.keys(error.response.data)) {
            console.log(key, '------', error.response.data[key].message);
            tempErrors[key] = error.response.data[key].message
        }
        setErrors({ ...tempErrors })
    }
}

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={login}>
        <h1>Sign in</h1>
        
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
