import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';

const mapSTP = ({ errors: { sessionErrors } }) => {
    return ({
        formType: 'Create Your Account',
        sessionErrors
    });
};

const mapDTP = dispatch => {
    return ({
        action: user => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    });
};

export default connect(mapSTP, mapDTP)(SessionForm);