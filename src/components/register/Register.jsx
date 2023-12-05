import "./Register.css";

const Register = () => {
    return(
        <div>
            <h2>Register</h2>
            <form>
                <div>
                    <label>Username</label>
                    <input placeholder="Insert username here..." />
                </div>
                <div>
                    <label>Email</label>
                    <input placeholder="Insert email here..." type="email" />
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

export default Register;