import axios from 'axios';

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

function setApiToken(token: string) {
	api.defaults.headers.Authorization = `Bearer ${token}`;
}

export { api, setApiToken };
