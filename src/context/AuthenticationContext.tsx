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
		if (token) {
			setApiToken(token);
			setIsAuthenticated(true);
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
