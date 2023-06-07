'use client';
import { AppButton, AppInput, RedirectOption, Logo } from '@/components';
import { useAuth } from '@/hook/useAuth';
import { PasswordIcon, UserIcon } from '@/icons/';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Home() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signIn } = useAuth();

	function handleClick(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (!email || !password) return toast.error('Preencha todos os campos');
		if (password.length < 8)
			return toast.error('A senha deve ter no mínimo 6 caracteres');
		signIn({ email, password });
	}

	return (
		<main>
			<form onSubmit={handleClick}>
				<Logo />
				<AppInput
					value={email}
					setValue={setEmail}
					placeholder='E-mail'
					Icon={UserIcon}
					type='email'
					name='email'
					autoComplete='email'
				/>
				<AppInput
					value={password}
					setValue={setPassword}
					placeholder='Senha'
					Icon={PasswordIcon}
					type='password'
					name='password'
					autoComplete='current-password'
				/>
				<AppButton text='Sign in' type='submit' />
			</form>
			<RedirectOption href='/sign-up' label='Sign up instead' />
		</main>
	);
}
