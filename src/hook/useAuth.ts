import { AuthenticationContext } from '@/context';
import { authApi } from '@/service';
import { SignInParams, SignUpParams, User } from '@/types';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { Id, toast } from 'react-toastify';

export function useAuth() {
	const router = useRouter();
	const [user, setUser] = useState<User>({} as User);
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
		onSuccess: (data) => {
			setUser(data.data.user as User);
		},
		onError: (error: AxiosError) => {
			tokenError = error;
			toast.error('Faça login novamente!');
			return router.push('/sign-in');
		},
	});

	let accountUpdateLink: Id;
	const { mutate: getAccountUpdateLink } = useMutation(
		async () => await authApi.getAccountUpdateLink(),
		{
			onMutate: () => {
				accountUpdateLink = toast.loading(
					'Obtendo link de atualização de conta...'
				);
			},
			onSuccess: (data) => {
				toast.update(accountUpdateLink, {
					render: 'Link de atualização de conta obtido com sucesso!',
					type: 'success',
					isLoading: false,
					autoClose: 2000,
				});
				toast.dismiss(accountUpdateLink);
				window.location = data.data.url;
			},
			onError: (error: AxiosError) => {
				toast.update(accountUpdateLink, {
					render: 'Não foi possível obter o link!',
					type: 'error',
					isLoading: false,
					autoClose: 3000,
				});
				toast.dismiss(accountUpdateLink);
			},
		}
	);

	const { mutate: getUserInfo } = useMutation(() => authApi.getUserInfo(), {
		onSuccess: (data) => {
			setUser(data.data);
		},
		onError: (error: AxiosError) => {
			toast.error('Erro ao obter informações do usuário!');
		},
	});

	return {
		signIn,
		signUp,
		checkToken,
		tokenError,
		getAccountUpdateLink,
		getUserInfo,
		user,
	};
}
