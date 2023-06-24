import { toast } from 'react-toastify';
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

async function checkToken() {
	return await api.get('/auth/check-token');
}

async function getUserInfo() {
	return await api.get('/auth/user-info');
}

async function getAccountUpdateLink() {
	return await api.get('/auth/update-stripe-account-link');
}

export const authApi = {
	signIn,
	signUp,
	signOut,
	checkToken,
	getAccountUpdateLink,
	getUserInfo,
};
