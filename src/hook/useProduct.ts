import { productApi } from '@/service';
import { ProductParams } from '@/types';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

export function useProduct() {
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

	return { postProduct: mutate };
}
