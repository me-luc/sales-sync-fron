'use client';
import { AppButton, AppInput, RedirectOption, Logo } from '@/components';
import UserIcon from '@/icons/user';
import { useState } from 'react';

export default function Home() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	function handleClick() {}

	return (
		<main>
			<Logo />
			<AppInput
				value={name}
				setValue={setName}
				placeholder='Nome'
				Icon={UserIcon}
			/>
			<AppInput
				value={email}
				setValue={setEmail}
				placeholder='E-mail'
				Icon={UserIcon}
			/>
			<AppInput
				value={password}
				setValue={setPassword}
				placeholder='Senha'
				Icon={UserIcon}
			/>
			<AppInput
				value={confirmPassword}
				setValue={setConfirmPassword}
				placeholder='Confirmar senha'
				Icon={UserIcon}
			/>
			<AppButton action={handleClick} text='Sign up' />
			<RedirectOption href='/sign-in' label='Sign in instead' />
		</main>
	);
}
