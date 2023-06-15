import { productApi } from '@/service';
import { CreateProductParams, ProductParams } from '@/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

export function useProduct() {
	const [products, setProducts] = useState([]);
	const router = useRouter();

	const { mutate } = useMutation(
		({
			product: { name, price, quantity, description, photo, supplier },
			formData,
		}: CreateProductParams) =>
			productApi.createProduct(
				{
					name,
					price,
					quantity,
					description,
					photo,
					supplier,
				},
				formData
			),
		{
			onSuccess: (data) => {
				toast.success('Produto adicionado com sucesso!');
				router.push('/home');
			},
			onError: (error: any) => {
				if (error.response.status === 413)
					toast.error(
						'Produto criado, porem Houve um problema ao adicionar imagem!'
					);
				toast.error('Não foi possível concluir!');
			},
		}
	);

	const { data, isLoading: productsLoading } = useQuery(
		'products',
		productApi.getProducts,
		{
			refetchOnMount: true,
			refetchOnWindowFocus: true,
		}
	);

	useEffect(() => {
		if (data?.data) {
			setProducts(data.data);
		}
	}, [data]);

	return { postProduct: mutate, products, productsLoading };
}
