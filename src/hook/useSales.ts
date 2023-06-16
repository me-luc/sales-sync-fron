import { salesApi } from '@/service/salesApi';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export function useSales(fn: Function) {
	const queryClient = useQueryClient();

	const { mutate: sellManually } = useMutation(
		(productId: number) => salesApi.sellManually(productId),
		{
			onSuccess: (data) => {
				toast.success('Venda realizada com sucesso!');
				fn();
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

	return { sellManually, sellProduct };
}
