export interface ProductParams {
	name: string;
	price: number;
	quantity: number;
	photo?: string;
	supplier?: string;
	description?: string;
}

export interface Product {
	id: string;
	name: string;
	price: number;
	quantity: number;
	photo?: string;
	supplier?: string;
	description?: string;
	category?: string;
}

export interface SignInParams {
	email: string;
	password: string;
}

export interface SignUpParams {
	email: string;
	password: string;
	name: string;
}
