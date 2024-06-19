import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn } from '../redux/actions/loginActions';

const PrivateRouteHOC = (WrappedComponent) => (props) => {
    const dispatch = useDispatch();
    const state = useSelector(store => store.loginReducer);
    const { loggedIn } = state;

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('loggedIn') === 'true';
        dispatch(setLoggedIn(loggedInStatus));
    }, [dispatch]);

    return loggedIn ? <WrappedComponent {...props} /> : <Navigate to="/" />;
};

export default PrivateRouteHOC;
