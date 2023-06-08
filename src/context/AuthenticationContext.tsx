'use client';
import { setApiToken } from '@/service/api';
import { createContext, useEffect, useState } from 'react';

export const AuthenticationContext = createContext({
	isAuthenticated: false,
	setToken: (token: string) => {},
});

export function AuthenticationProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [token, setToken] = useState('');

	useEffect(() => {
		if(!isAuthenticated) {
			const tokenLoaded = loadToken();
			if(tokenLoaded) setToken(tokenLoaded);
		}
		if (token) {
			setApiToken(token);
			setIsAuthenticated(true);
			saveToken(token);
			console.log('token configured on context');
		}
	}, [token]);

	return (
		<AuthenticationContext.Provider
			value={{
				isAuthenticated,
				setToken,
			}}>
			{children}
		</AuthenticationContext.Provider>
	);
}

function loadToken() {
	return localStorage.getItem('token');
}

function saveToken(token: string) {
	localStorage.setItem('token', token);
}