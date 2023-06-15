import { CreateProductParams, ProductParams } from '@/types';
import { api } from './api';

async function getProducts() {
	console.log('getProducts');
	return await api.get('/products');
}

async function getProduct(id: string) {
	return await api.get(`/products/${id}`);
}

async function createProduct(
	{ name, price, photo, supplier, quantity, description }: ProductParams,
	formData: FormData
) {
	formData.append('name', name);
	formData.append('price', String(price));
	if (supplier) formData.append('supplier', supplier);
	formData.append('quantity', String(quantity));
	if (description) formData.append('description', description);

	return await api.post('/products', formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
}

export const productApi = {
	getProducts,
	getProduct,
	createProduct,
};
