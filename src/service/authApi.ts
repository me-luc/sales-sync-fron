import { api } from './api';

async function signIn(email: string, password: string) {
	return await api.post('/auth/sign-in', {
		email,
		password,
	});
}

async function signUp(email: string, password: string, name: string) {
	return await api.post('/auth/sign-up', {
		email,
		password,
		name,
	});
}

async function signOut() {
	return await api.post('/auth/sign-out');
}

export const authApi = {
	signIn,
	signUp,
	signOut,
};
