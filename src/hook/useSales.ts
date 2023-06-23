import { salesApi } from '@/service/salesApi';
import { ProductSale, SaleResponse } from '@/types';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Id, toast } from 'react-toastify';

export function useSales(fn?: Function) {
	const queryClient = useQueryClient();

	const [sales, setSales] = useState<SaleResponse[]>([]);
	const [paymentLink, setPaymentLink] = useState<string>('');

	const { mutate: sellManually } = useMutation(
		(products: ProductSale[]) => salesApi.sellManually(products),
		{
			onSuccess: (data) => {
				toast.success('Venda realizada com sucesso!');
				fn && fn();
			},
			onError: (error: any) => {
				toast.error('Não foi possível concluir! Cheque o estoque.');
			},
			onSettled: () => {
				queryClient.invalidateQueries('products');
			},
		}
	);

	let paymentLinkToastId: Id;
	const { mutate: getPaymentLink } = useMutation(
		(products: ProductSale[]) => salesApi.sellProduct(products),
		{
			onMutate: () => {
				paymentLinkToastId = toast.loading(
					'Gerando link de pagamento...',
					{
						autoClose: false,
					}
				);
			},
			onSuccess: (data) => {
				setPaymentLink(data.data.url);
				toast.update(paymentLinkToastId, {
					render: 'Link gerado com sucesso!',
					type: 'success',
					isLoading: false,
					autoClose: 3000,
				});
				toast.dismiss(paymentLinkToastId);
			},
			onError: (error: any) => {
				toast.update(paymentLinkToastId, {
					render: 'Não foi possível gerar o link!',
					type: 'error',
					isLoading: false,
					autoClose: 3000,
				});
				toast.dismiss(paymentLinkToastId);
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

	return { sellManually, getPaymentLink, sales, paymentLink };
}
