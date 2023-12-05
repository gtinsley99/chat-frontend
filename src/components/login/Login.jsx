import "./Login.css";

const Login = () => {
    return(
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label>Username</label>
                    <input placeholder="Insert username here..." />
                </div>
                <div>
                    <label>Password</label>
                    <input placeholder="Insert password here" type="password" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;