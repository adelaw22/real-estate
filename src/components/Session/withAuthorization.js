import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { withFireBase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { compose } from 'recompose';
import AuthUserContext from './context';


// This will help handle authorization. Its going to use fine grained auhtorization where
// the user is taken to login page if the user isn't logged in and proceed if they are.
// This is also going to control permissions and roles. If the user is not an admin they can't see the admin page
//  and viceversa.
const withAuthorization = condition => Component => {
    const WithAuthorization = props => {
        
        
        useEffect(() => {
          const unsubscribe =  props
            .firebase.onAuthUserListener(authUser => {
                if(!condition(authUser)) {
                    props.history.push(ROUTES.SIGN_IN)
                }
            }, () => props.history.push(ROUTES.SIGN_IN));
            return () => {
                unsubscribe()
            }
        }, [])
            
            // This prevents the page from showing the protected page before redirect happens.
        return (
            <AuthUserContext.Consumer>
                {
                    authUser => condition(authUser) ? <Component  {...this.props}/> : null
                }
            </AuthUserContext.Consumer>
        )
        
    }

    return compose(
        withRouter,
        withFireBase
    )
    (WithAuthorization);
}

export default withAuthorization;