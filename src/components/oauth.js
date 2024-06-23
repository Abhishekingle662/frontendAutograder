import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useHistory } from 'react-router-dom';

function OAuthLogin() {
    const history = useHistory();

    const login = useGoogleLogin({
        onSuccess: () => {
            // Redirect to the main app page after successful login
            history.push('/main-app');
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    return (
        <div>
            <p>Welcome to Grade.ai</p>
            <button onClick={() => login()}>Sign in with Google 🚀</button>
        </div>
    );
}

export default OAuthLogin;
