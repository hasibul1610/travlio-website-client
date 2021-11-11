import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    // console.log('came From', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div>
            <div className="login-header-bg">
                <p className="container">Login</p>
            </div>
            <Container>
                <div className="row">
                    <div className="col-lg-6 col-sm-12 sign-in-btn">
                        {/* <button onClick={() => signInUsingGoogle()}>Google Sign In</button> */}
                        <button onClick={handleGoogleLogin}>Google Sign In</button>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img className="img-fluid" src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/uploads/2020/09/about.png" alt="" />
                    </div>
                </div>
            </Container>
            <br />
            <br />
        </div>

    );
};

export default Login;