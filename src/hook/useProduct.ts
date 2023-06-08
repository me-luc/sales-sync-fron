import { productApi } from '@/service';
import { ProductParams } from '@/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

export function useProduct() {
	const [products, setProducts] = useState([]);
	const router = useRouter();

	const { mutate } = useMutation(
		({
			name,
			price,
			quantity,
			description,
			photo,
			supplier,
		}: ProductParams) =>
			productApi.createProduct({
				name,
				price,
				quantity,
				description,
				photo,
				supplier,
			}),
		{
			onSuccess: (data) => {
				toast.success('Produto adicionado com sucesso!');
				router.push('/home');
			},
			onError: (error) => {
				toast.error('Não foi possível concluir!');
			},
		}
	);

	const { data, isLoading: productsLoading } = useQuery(
		'products',
		productApi.getProducts
	);

	useEffect(() => {
		if (data?.data) {
			setProducts(data.data);
		}
	}, [data]);

	return { postProduct: mutate, products, productsLoading };
}
