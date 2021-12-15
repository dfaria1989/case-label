import React, { useState, useReducer } from 'react'
import { RouteComponentProps } from 'react-router-dom';

interface Props {

}

const Login: React.FC<RouteComponentProps> = ({ history }) => {

    const [details, setDetails] = useState({ email: "", password: "" });

    const submitHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(e)
        history.push("/")
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" value="LOGIN" className="" />
            </div>

        </form>
    )
}

export default Login
