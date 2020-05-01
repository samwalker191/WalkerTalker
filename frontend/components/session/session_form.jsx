import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './session_form.module.css';

const SessionForm = ({ formType, action, sessionErrors, clearErrors }) => {
    const [user, setUser] = useState({ username: '', password: '' });

    function handleSubmit(e) {
        e.preventDefault();
        action(user);
    }

    function update(field) {
        return e => setUser({ ...user, [field]: e.target.value });
    }

    let toOtherForm, autoComplete, submitText;

    
    if (formType === 'Create Your Account') {
        toOtherForm = <Link to="/signin" onClick={() => clearErrors()}>Sign in instead</Link>;
        submitText = 'Sign up';
        autoComplete = 'new-password'

    } else if (formType === 'Welcome Back!') {
        toOtherForm = <Link to="/signup" onClick={() => clearErrors()}>Create Account</Link>;
        submitText = 'Sign in';
        autoComplete = 'current-password'
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
                        autoComplete='username'
                    />

                    <input
                        type='password'
                        value={user.password}
                        onChange={update('password')}
                        placeholder="Password"
                        autoComplete={autoComplete}
                    />

                    <ul className={styles.errors}>
                        {sessionErrors.map((error, id) => <li key={id}>{error}</li>)}
                    </ul>

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