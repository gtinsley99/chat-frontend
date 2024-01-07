import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginRoute } from "../../utils";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        await LoginRoute(username, password, navigate);
        setUsername("");
        setPassword("");
    }

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username</label>
                    <input  value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text" placeholder="Insert username here..." />
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

export default Login;