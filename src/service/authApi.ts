import { api } from './api';

export async function signIn(email: string, password: string) {
	return await api.post('/auth/sign-in', {
		email,
		password,
	});
}

export async function signUp(email: string, password: string, name: string) {
	return await api.post('/auth/sign-up', {
		email,
		password,
		name,
	});
}

export async function signOut() {
	return await api.post('/auth/sign-out');
}
