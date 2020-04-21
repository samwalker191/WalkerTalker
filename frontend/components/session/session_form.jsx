import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { username: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
    }

    

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        
        let toOtherForm;
        let usernameField;
        let demoUserButton;

        if (this.props.formType === 'Create Your Account') {
            toOtherForm = <Link to="/signin">Sign in instead</Link>;
            
        } else if (this.props.formType === 'Sign In') {
            toOtherForm = <Link to="/signup">Create Account</Link>;
            demoUserButton = <button onClick={this.handleDemo} className="session-form-demo-button">
                                Demo
                            </button>
        }
        return (
            <div className='session-form-container'>
                <div className='session-form'>
                    <div className="session-form-content">

                        <header className='session-form-header'>
                            <h3>{this.props.formType}</h3>
                        </header>

                        <form className='session-form-inputs-container' onSubmit={this.handleSubmit}>

                            <div>
                                <input
                                    type='text'
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    placeholder="Username"
                                />
                            </div>

                            <div>
                                <input
                                    type='password'
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                />
                            </div>

                            <input type='submit' className='session-form-submit' />
                        </form>
                    
                        <div className="session-form-buttons">
                            {toOtherForm}
                            <button onClick={this.handleSubmit}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;