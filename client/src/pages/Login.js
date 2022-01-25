import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';


//Google Passport Styles
import { GoogleLogin } from "react-google-login"
import Icon from "./Icon"
import { useDispatch } from "react-redux"




import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  const dispatch = useDispatch();

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };


// arrow functions for Google Login

const googleSuccess = async (res) => {
  const result = res?.profileObj;
  const token = res?.tokenId;

  try {

    dispatch();

  } catch (error) {




    console.log(error);
  }


  console.log(res)
};

const googleFailure = (error) => {
    console.log(error)
    console.log("Google Sign In was unsuccessful.")
};


  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Login</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
              <GoogleLogin 
                clientId="GOOGLE ID"
                render={(renderProps) => (
                  <button //className={classes.googleButton} 
                  color="primary" fullWidth 
                  onClick={renderProps.onClick} 
                  disabled={renderProps.disabled} 
                  startIcon={<Icon />} variant="contained">
                    Google Sign In
                  </button>
                )}

                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              
              />
            </form>

            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
