import React, { Component } from 'react';
// import { Redirect } from 'react-router'
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

class Welcome extends Component {
    componentWillMount(){
        fetch('/dashboard')
        .then(res => res.json())
        .then(customer => console.log(customer))
        .catch(err => {
            console.log("fetch not work");
        })
    }
    responseGoogle = (response) => {
        console.log(response.w3.U3);
        console.log(response.w3.ig);
        console.log(response.w3.ofa);
        console.log(response.w3.wea);
        console.log('just redireting');
        // this.props.history.push(`/target`)
      }
      logout = (response) => {
          console.log(response);
      }
    render() {
        return (
            <div className="container">
                <h1>Hey, Welcome</h1>
                <h3>Welcome to Storybook by Edumonk</h3>
                <p>Post stories from the best and worst of your life and choose for them to be read by the world or completley private as your own personal diary</p>
                <GoogleLogin
                    clientId="952802453575-60mlt8b42glrj82tk6nvu5fl2qviudeg.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <GoogleLogout
                    clientId="952802453575-60mlt8b42glrj82tk6nvu5fl2qviudeg.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={this.logout}
                >
                </GoogleLogout>
            </div>
        )
    }
}
export default Welcome;