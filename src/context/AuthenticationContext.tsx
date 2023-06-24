'use client';
import { useAuth } from '@/hook';
import { setApiToken } from '@/service/api';
import { User } from '@/types';
import { get } from 'http';
import { createContext, useEffect, useState } from 'react';

export const AuthenticationContext = createContext({
	isAuthenticated: false,
	setToken: (token: string) => {},
	finishedLoading: false,
	user: null as User | null,
	setUser: (user: User) => {},
});

export function AuthenticationProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [token, setToken] = useState('');
	const [finishedLoading, setFinishedLoading] = useState(false);
	const [user, setUser] = useState<User>({} as User);

	const { checkToken, getUserInfo, user: userInfo } = useAuth();

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
			checkToken();
			setIsAuthenticated(true);
		}
		getUserInfo();
	}, [token]);

	useEffect(() => {
		if (userInfo) {
			setUser(userInfo);
		}
	}, [userInfo]);

	return (
		<AuthenticationContext.Provider
			value={{
				isAuthenticated,
				setToken,
				finishedLoading,
				user,
				setUser,
			}}>
			{children}
		</AuthenticationContext.Provider>
	);
}

function loadToken() {
	return localStorage.getItem('token');
}
