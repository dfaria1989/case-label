import React, { useState } from "react";
import { login } from "../../services/auth.service";
import { RouteComponentProps } from "react-router-dom";
import { Form } from "react-bootstrap";

interface RouterProps {
  history: string;
}

type Props = RouteComponentProps<RouterProps>;

const Login: React.FC<Props> = ({ history }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: any) => {
    setMessage("");
    e.preventDefault()

    if (!username || !password) {
      setMessage("Missing values!");
      return;
    }
    setLoading(true);
    
    login(username, password).then(
      (data) => {
        history.push({
          pathname: '/',
          state: data
        })

      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data) ||
          error.message ||
          error.toString();
        setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" onChange={e => setUserName(e.target.value)} placeholder="Enter username" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
          </Form.Group>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default Login;