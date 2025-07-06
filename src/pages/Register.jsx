import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Register = () => {

    const [user, setUser] = useState({
        username : "",
        email : "",
        phone : "",
        password : ""
    });

    const navigate = useNavigate();

    // Handling the input value
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        
        setUser({
            ...user,
            [name] : value,
        })
    };

    // Form data submitting
    const formSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {

        // Backend response connecting string data post
       
        const response = await fetch(`https://server-api-oijz.onrender.com/api/register`, {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(user)
        })
        // debugger;
        if(response.ok){
            setUser({username : "", email : "", phone : "", password : ""});
            // debugger;
            navigate("/login")
        }
        // debugger;
        console.log(response)
    } catch (error) {
            console.log("Register", error);
    }
    }

    return (
        <>
        <section className="page-section">
            <main className="page-main">
                <div className="page-box">
                    <div className="container grid grid-two-cols">
                        <div className="container-img">
                            <img src="/images/register-page-logo.jpg" alt="user regestring the form" width="400" height="500" />
                        </div>
                        <div className="container-form">
                            <div className="register-header">
                                <h2 className="header-title">Register Form</h2>
                            </div>
                            <div className="container-register">
                                <form onSubmit={formSubmit}>
                                    <div className="username-box form-box">
                                        <label className="form-label" htmlFor="username">Username</label>  <br />
                                        <input className="input-text"
                                        type="text"
                                        name="username"
                                        placeholder="Enter username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        value={user.username}
                                        onChange={handleInput}
                                        />
                                    </div>

                                    <div className="email-box form-box">
                                        <label className="form-label" htmlFor="email">Email</label>  <br />
                                        <input className="input-text"
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInput}
                                        />
                                    </div>

                                    <div className="phone-box form-box">
                                        <label className="form-label" htmlFor="phone">Phone</label>  <br />
                                        <input className="input-text"
                                        type="number"
                                        name="phone"
                                        placeholder="Enter phone number"
                                        id="phone"
                                        required
                                        autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInput}
                                        />
                                    </div>

                                    <div className="password-box form-box">
                                        <label className="form-label" htmlFor="password">Password</label>  <br />
                                        <input className="input-text"
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={handleInput}
                                        />
                                    </div>

                                    <br />
                                    <button type="submit" className="btn btn-submit">Register Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    )
}

export default Register;