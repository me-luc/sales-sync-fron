'use client';
import { AppButton, AppInput, RedirectOption, Logo } from '@/components';
import { useAuth } from '@/hook/useAuth';
import { PasswordIcon, UserIcon } from '@/icons';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Home() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const { signUp } = useAuth();

	function handleClick(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!email || !password || !name || !confirmPassword)
			return toast.error('Preencha todos os campos');

		if (password.length < 8)
			return toast.error('A senha deve ter no mínimo 8 caracteres');

		if (password !== confirmPassword)
			return toast.error('As senhas não coincidem');

		signUp({ email, password, name });
	}

	return (
		<main>
			<Logo />
			<form onSubmit={handleClick}>
				<AppInput
					value={name}
					setValue={setName}
					placeholder='Nome'
					Icon={UserIcon}
					type='name'
					name='name'
					autoComplete='name'
				/>
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
				/>
				<AppInput
					value={confirmPassword}
					setValue={setConfirmPassword}
					placeholder='Confirmar senha'
					Icon={PasswordIcon}
					type='password'
					name='password'
				/>
				<AppButton type='submit' text='Sign up' />
			</form>
			<RedirectOption href='/sign-in' label='Sign in instead' />
		</main>
	);
}
