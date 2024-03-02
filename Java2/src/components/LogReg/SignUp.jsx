import React,{useState} from "react";
import axios from "axios";
function SignUpForm() {
  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
    confirm:""
  });
  
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const register = async (e) => {
    e.preventDefault();
    console.log("user send ========>:", state);
    try {
      const response = await axios.post(
        "http://localhost:8080/register",
        state
      );
      console.log("SERVER RESPONSE:", response.data);
      localStorage.setItem("token", response.data.token);
      // window.location.href = '/home';
      //navigate("/home");
      console.log('Redirected to /home');
    } catch (error) {
      console.log("Error:", error);
    //   let tempErrors = {};
//       for (let key of Object.keys(error.response.data)) {
//         console.log(key, "------", error.response.data[key].message);
//         tempErrors[key] = error.response.data[key].message;
//       }
//       setErrors({ ...tempErrors });
   }
   };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={register}>
        <h1>Create Account</h1>

        <input
          type="text"
          name="userName"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="confirm"
          value={state.confirm}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
