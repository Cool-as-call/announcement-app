export const Authentication =()=>{
    return(
        <div className="auth">
           <Login />
           <Register />
        </div>
    )
}

const Login=()=>{
    return(
        <div className="login">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
    )
}
const Register=()=>{
    return(
        <div className="register">
            
            <form>
            <h1>Register</h1>
                <div>
                    <label htmlFor="username">User Name</label>
                <input type="text" id="username" placeholder="Username" onChange={(event)=>} />
                </div>
                <div>
                    <label htmlFor="password">User Name</label>
                <input type="text" id="password" placeholder="Username" onChange={(event)=>} />
                </div>
            </form>
            
        </div>
    )
}