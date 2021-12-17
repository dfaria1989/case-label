import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from "../services/auth.service";


type Props = {
    component: any,
    exact: any,
    path: string
}

const ProtectedRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated()) {
                    return <Component {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
    )
}

export default ProtectedRoute
