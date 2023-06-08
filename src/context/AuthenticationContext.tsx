'use client';
import { setApiToken } from '@/service/api';
import { createContext, useEffect, useState } from 'react';

export const AuthenticationContext = createContext({
	isAuthenticated: false,
	setToken: (token: string) => {},
	finishedLoading: false,
});

export function AuthenticationProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [token, setToken] = useState('');
	const [finishedLoading, setFinishedLoading] = useState(false);

	useEffect(() => {
		const tokenLoaded = loadToken();
		if (tokenLoaded) {
			setToken(tokenLoaded);
			setApiToken(tokenLoaded);
			setIsAuthenticated(true);
		}
		setFinishedLoading(true);
	}, []);

	useEffect(() => {
		if (token) {
			setApiToken(token);
			setIsAuthenticated(true);
		}
	}, [token]);

	return (
		<AuthenticationContext.Provider
			value={{
				isAuthenticated,
				setToken,
				finishedLoading,
			}}>
			{children}
		</AuthenticationContext.Provider>
	);
}

function loadToken() {
	return localStorage.getItem('token');
}
