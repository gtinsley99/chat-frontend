import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterRoute } from "../../utils";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        await RegisterRoute(username, email, password, navigate);
        setUsername("");
        setPassword("");
        setEmail("");
    };

    return(
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username</label>
                    <input onChange={(e) => setUsername(e.target.value)} placeholder="Insert username here..." type="text" />
                </div>
                <div>
                    <label>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="Insert email here..." type="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} placeholder="Insert password here" type="password" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Register;