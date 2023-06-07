import { ProductParams } from '@/types';
import { api } from './api';

async function getProducts() {
	return await api.get('/products');
}

async function getProduct(id: string) {
	return await api.get(`/products/${id}`);
}

async function createProduct({
	name,
	price,
	photo,
	supplier,
	quantity,
	description,
}: ProductParams) {
	return await api.post('/products', {
		product: { name, price, quantity, photo, description },
	});
}

export const productApi = {
	getProducts,
	getProduct,
	createProduct,
};
