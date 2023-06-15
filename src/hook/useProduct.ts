import { productApi } from '@/service';
import { CreateProductParams } from '@/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export function useProduct() {
	const queryClient = useQueryClient();
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
				router.push('/products');
			},
			onError: (error: any) => {
				if (error.response.status === 413)
					toast.error(
						'Produto criado, porem Houve um problema ao adicionar imagem!'
					);
				toast.error('Não foi possível concluir!');
			},
			onSettled: () => {
				queryClient.invalidateQueries('products');
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

	const { mutate: deleteProduct } = useMutation(
		(id: number) => productApi.deleteProduct(id),
		{
			onSuccess: (data) => {
				toast.success('Produto deletado com sucesso!');
				router.push('/products');
			},
			onError: (error: any) => {
				toast.error('Não foi possível concluir!');
			},
			onSettled: () => {
				queryClient.invalidateQueries('products');
			},
		}
	);

	useEffect(() => {
		if (data?.data) {
			setProducts(data.data);
		}
	}, [data]);

	return { postProduct: mutate, products, productsLoading, deleteProduct };
}
