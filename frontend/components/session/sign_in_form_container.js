import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signin, clearErrors } from '../../actions/session_actions';

const mapSTP = ({ errors: { sessionErrors } }) => {
    return ({
        formType: 'Welcome Back!',
        sessionErrors
    });
};

const mapDTP = dispatch => {
    return ({
        action: user => dispatch(signin(user)),
        clearErrors: () => dispatch(clearErrors())
    });
};

export default connect(mapSTP, mapDTP)(SessionForm);