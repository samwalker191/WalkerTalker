import React from 'react';
import { Link } from 'react-router-dom';
import styles from './session_form.module.css';

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
        let headerText;
        let demoUserButton;
        let submitText;

        if (this.props.formType === 'Create Your Account') {
            toOtherForm = <Link to="/signin">Sign in instead</Link>;
            submitText = 'Sign up';
        } else if (this.props.formType === 'Welcome Back!') {
            toOtherForm = <Link to="/signup">Create Account</Link>;
            submitText = 'Sign in';
            demoUserButton = <button onClick={this.handleDemo} className="session-form-demo-button">
                                Demo
                            </button>
        }
        return (
            <div className={styles.sessionFormContainer}>
                <div className={styles.sessionForm}>

                        <h3>{this.props.formType}</h3>

                        <form className={styles.inputs} onSubmit={this.handleSubmit}>
                            <input
                                type='text'
                                value={this.state.username}
                                onChange={this.update('username')}
                                placeholder="Username"
                            />

                            <input
                                type='password'
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                            />
                            <input type="submit" className={styles.submit}/>
                        </form>
                    
                        <div className={styles.sessionFormButtons}>
                            {toOtherForm}
                            <button onClick={this.handleSubmit}>{submitText}</button>
                        </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;