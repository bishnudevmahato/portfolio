import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"



const Login = () => {
  // const navigate = useNavigate;
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmits = async (e) => {
    // e.preventDefault();
    const email = e.email;         
    const password = e.password;
    // const email = data.email;
    // const password = data.password;
    console.log("email",email);
    console.log("password",password);
    try {
      const response = await axios.post("https://server-api-oijz.onrender.com/api/login", {email, password});
      localStorage.setItem("token", response.data.token);
      setMessage(response.data.message);
      console.log(response.data);  
      alert("login successful")
      // debugger;
      navigate("/about")
      // reset();
    } catch (error) {
      setMessage("Registration failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <section className="page-section">
      <main className="page-main">
        <div className="page-box">
          <div className="register-container container grid grid-two-container">
            <div className="container-img">
              <img src="/images/register-logo.png" alt="user regestring the form" width="400" height="500" />
            </div>
            <div className="container-form">
              <h2 className="header-title">Login </h2>
              {message && <p className="message">{message}</p>}
              <form onSubmit={handleSubmit(onSubmits)}>
              {/* <form> */}
                <div>

                  <label className="form-label">Email</label>  <br />
                  <input className="input-text" type="email" {...register("email", { required: "Email is required" })} />
                  {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="form-label">Password</label>  <br />
                  <input className="input-text"
                    type="password"
                    {...register("password", { required: "Password is required", minLength: 6 })}
                  />
                  {errors.password && <p className="error">{errors.password.message}</p>}
                </div>  <br />

                <button className="login-btn" type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
