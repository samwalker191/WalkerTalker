import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './session_form.module.css';

const SessionForm = ({ formType, action, }) => {
    const [user, setUser] = useState({ username: '', password: '' });

    function handleSubmit(e) {
        e.preventDefault();
        action(user);
    }

    function update(field) {
        return e => setUser({ ...user, [field]: e.target.value });
    }

    let toOtherForm;
    // let demoUserButton;
    let submitText;

    if (formType === 'Create Your Account') {
        toOtherForm = <Link to="/signin">Sign in instead</Link>;
        submitText = 'Sign up';
    } else if (formType === 'Welcome Back!') {
        toOtherForm = <Link to="/signup">Create Account</Link>;
        submitText = 'Sign in';
        // demoUserButton = <button onClick={this.handleDemo} className="session-form-demo-button">
        //                     Demo
        //                 </button>
    }

    return (
        <div className={styles.sessionFormContainer}>
            <div className={styles.sessionForm}>

                <h3>{formType}</h3>

                <form className={styles.inputs} onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={user.username}
                        onChange={update('username')}
                        placeholder="Username"
                    />

                    <input
                        type='password'
                        value={user.password}
                        onChange={update('password')}
                        placeholder="Password"
                    />
                    <input type="submit" className={styles.submit}/>
                </form>

                <div className={styles.sessionFormButtons}>
                    {toOtherForm}
                    <button onClick={handleSubmit}>{submitText}</button>
                </div>
            </div>
        </div>
    )
};

export default SessionForm;