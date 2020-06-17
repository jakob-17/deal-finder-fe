import React from 'react';
import './SignIn.css';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInUsername: '',
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }
    onUsernameChange = (event) => {
        this.setState({ signInUsername: event.target.value })
    }

    clickedSignIn = () => {
        this.props.onRouteChange('home');
    }

    render() {
        return (
            <main className="signin">
                <h1>Sign in to Deal Finder:</h1>
                <fieldset id="signin">
                    <div>
                        <label className="f4 fw6" htmlFor="email-address">Email</label>
                        <input type="text" name="email" className="input-reset db w-100 mw-100 white b pv2 ph3 
                        bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill"
                            classonChange={this.onEmailChange} />
                        <br />
                        <label className="f4 fw6" htmlFor="username">Username</label>
                        <input type="text" name="username" className="input-reset db w-100 mw-100 white b pv2 ph3 
                        bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill"
                            onChange={this.onUsernameChange} />
                        <br />
                        <br />
                    </div>
                    <div>
                        <button onClick={(this.clickedSignIn)}
                            className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib near-black">Sign In</button>
                    </div>
                </fieldset>
            </main>
        );
    }
}

export default SignIn;