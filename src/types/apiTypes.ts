export interface ProductParams {
	name: string;
	price: number;
	quantity: number;
	photo?: string;
	supplier?: string;
	description?: string;
}

export interface CreateProductParams {
	product: ProductParams;
	formData: FormData;
}

export interface Product {
	id: number;
	name: string;
	price: number;
	quantity: number;
	photo?: string;
	supplier?: string;
	description?: string;
	category?: string;
}

export interface ProductSale {
	id: number;
	name: string;
	category?: string;
	price: number;
	quantity: number;
	photo: string;
	selected: boolean;
	desiredQuantity: number;
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

export interface ProductSaleResponse {
	id: string;
	name: string;
	quantity: number;
	price: number;
	photo: string;
}

export interface SaleResponse {
	id: number;
	date: string;
	saleProducts: ProductSaleResponse[];
	paymentMethod: string;
	totalPrice: number;
}

export interface User {
	id: string;
	name: string;
	email: string;
	stripeAccountId: string;
	stripeCompletedProfile: boolean;
}
