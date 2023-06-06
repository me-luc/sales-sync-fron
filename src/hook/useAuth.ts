import * as authApi from '@/service/authApi';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

interface SignInParams {
	email: string;
	password: string;
}

interface SignUpParams {
	email: string;
	password: string;
	name: string;
}

export function useAuth() {
	const router = useRouter();

	const { mutate: signIn } = useMutation(
		({ email, password }: SignInParams) => authApi.signIn(email, password),
		{
			onSuccess: (data) => {
				toast.success('Login realizado com sucesso!');
				router.push('/home');
			},
			onError: (error: AxiosError) => {
				toast.error('Credenciais inválidas!');
			},
		}
	);

	const { mutate: signUp } = useMutation(
		({ email, password, name }: SignUpParams) =>
			authApi.signUp(email, password, name),
		{
			onSuccess: (data) => {
				toast.success('Cadastro realizado com sucesso!');
				router.push('/home');
			},
			onError: (error: AxiosError) => {
				toast.error('Credenciais inválidas!');
			},
		}
	);

	return {
		signIn,
		signUp,
	};
}
