import { AuthenticationContext } from '@/context';
import { authApi } from '@/service';
import { SignInParams, SignUpParams } from '@/types';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

export function useAuth() {
	const router = useRouter();
	const { setToken } = useContext(AuthenticationContext);

	const { mutate: signIn } = useMutation(
		({ email, password }: SignInParams) => authApi.signIn(email, password),
		{
			onSuccess: (data) => {
				setToken(data.data.token);
				toast.success('Login realizado com sucesso!');
				router.push('/home');
			},
			onError: (error) => {
				toast.error('Credenciais inválidas!');
			},
		}
	);

	const { mutate: signUp } = useMutation(
		({ email, password, name }: SignUpParams) =>
			authApi.signUp(email, password, name),
		{
			onSuccess: (data) => {
				setToken(data.data.token);
				toast.success('Cadastro realizado com sucesso!');
				router.push('/home');
			},
			onError: (error: AxiosError) => {
				toast.error('Credenciais inválidas!');
			},
		}
	);

	let tokenError: AxiosError | undefined;
	const { mutate: checkToken } = useMutation(() => authApi.checkToken(), {
		onError: (error: AxiosError) => {
			tokenError = error;
			toast.error('Faça login novamente!');
			return router.push('/sign-in');
		},
	});

	return {
		signIn,
		signUp,
		checkToken,
		tokenError,
	};
}
