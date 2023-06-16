import { api } from './api';

async function sellManually(productId: number) {
	return await api.post('/sales/manual', {
		products: [
			{
				id: productId,
				quantity: 1,
			},
		],
	});
}

async function sellProduct(productId: number) {
	return await api.post('/sales', {
		products: [
			{
				id: productId,
				quantity: 1,
			},
		],
	});
}

export const salesApi = { sellManually, sellProduct };
