// src/GoogleAuth.js

import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function GoogleAuth() {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center">
                <div>
                    <p className='text-5xl font-semibold'>Welcome to Grade.ai</p>
                    <br />
                    <br />
                    {profile ? (
                        <div>
                            <img src={profile.picture} alt="user" />
                            <h3>User Logged in</h3>
                            <p>Name: {profile.name}</p>
                            <p>Email Address: {profile.email}</p>
                            <br />
                            <br />
                            <button onClick={logOut}>Log out</button>
                        </div>
                    ) : (
                        <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-4 px-4 rounded-xl bg-violet-500 text-white text-lg font-bold' onClick={() => login()}>Sign in with Google 🚀 </button>
                    )}
                </div>
            </div>
            <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
                <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
                <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
            </div>
        </div>
    );
}

export default GoogleAuth;
