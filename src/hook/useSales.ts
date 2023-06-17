import { salesApi } from '@/service/salesApi';
import { SaleResponse } from '@/types';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export function useSales(fn?: Function) {
	const queryClient = useQueryClient();

	const [sales, setSales] = useState<SaleResponse[]>([]);

	const { mutate: sellManually } = useMutation(
		(productId: number) => salesApi.sellManually(productId),
		{
			onSuccess: (data) => {
				toast.success('Venda realizada com sucesso!');
				fn && fn();
			},
			onError: (error: any) => {
				toast.error('Não foi possível concluir!');
			},
			onSettled: () => {
				queryClient.invalidateQueries('products');
			},
		}
	);

	const { mutate: sellProduct } = useMutation(
		(productId: number) => salesApi.sellProduct(productId),
		{
			onSuccess: (data) => {
				window.location = data.data.url;
			},
			onError: (error: any) => {
				toast.error('Não foi possível concluir!');
			},
			onSettled: () => {
				queryClient.invalidateQueries('products');
			},
		}
	);

	const { data: saleResponse } = useQuery('sales', salesApi.getSales);

	useEffect(() => {
		if (saleResponse) {
			setSales(saleResponse.data);
		}
	}, [saleResponse]);

	return { sellManually, sellProduct, sales };
}
