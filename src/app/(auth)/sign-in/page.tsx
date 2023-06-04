'use client';
import { AppButton, AppInput, RedirectOption, Logo } from '@/components';
import UserIcon from '@/icons/user';
import { useState } from 'react';

export default function Home() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleClick() {}

	return (
		<main>
			<Logo />
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
			<AppButton action={handleClick} text='Sign in' />
			<RedirectOption href='/sign-up' label='Sign up instead' />
		</main>
	);
}
