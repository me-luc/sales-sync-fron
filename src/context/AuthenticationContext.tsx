'use client';
import { useAuth } from '@/hook';
import { setApiToken } from '@/service/api';
import { User } from '@/types';
import { createContext, useEffect, useState } from 'react';

export const AuthenticationContext = createContext({
	isAuthenticated: false,
	setToken: (token: string) => {},
	finishedLoading: false,
	user: null as User | null,
});

export function AuthenticationProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [token, setToken] = useState('');
	const [finishedLoading, setFinishedLoading] = useState(false);
	const [user, setUser] = useState<User | null>(null);

	const { checkToken } = useAuth();

	useEffect(() => {
		const tokenLoaded = loadToken();
		if (tokenLoaded) {
			setToken(tokenLoaded);
			setApiToken(tokenLoaded);
			checkToken();
			setIsAuthenticated(true);
		}
		setFinishedLoading(true);
	}, [checkToken]);

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
				user,
			}}>
			{children}
		</AuthenticationContext.Provider>
	);
}

function loadToken() {
	return localStorage.getItem('token');
}
