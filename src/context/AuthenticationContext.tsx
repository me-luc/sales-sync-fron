'use client';
import { useAuth } from '@/hook';
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

	const { checkToken, tokenError } = useAuth();

	useEffect(() => {
		const tokenLoaded = loadToken();
		if (tokenLoaded) {
			setToken(tokenLoaded);
			setApiToken(tokenLoaded);
			checkToken();
			setIsAuthenticated(true);
			console.log(isAuthenticated);
		}
		setFinishedLoading(true);
	}, []);

	useEffect(() => {
		if (token) {
			setApiToken(token);
			localStorage.setItem('token', token);
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
