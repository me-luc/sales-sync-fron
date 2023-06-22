import { ProductSale } from '@/types';
import { api } from './api';

async function sellManually(products: ProductSale[]) {
	const productsFormatted = products.map((product) => ({
		id: product.id,
		quantity: product.desiredQuantity,
	}));

	return await api.post('/sales/manual', {
		products: productsFormatted,
	});
}

async function sellProduct(products: ProductSale[]) {
	const productsFormatted = products.map((product) => ({
		id: product.id,
		quantity: product.desiredQuantity,
	}));

	return await api.post('/sales', {
		products: productsFormatted,
	});
}

async function getSales() {
	return await api.get('/sales');
}

export const salesApi = { sellManually, sellProduct, getSales };
