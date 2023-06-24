'use client';
import { RedirectOption } from '@/components';
import { ToastSuccessIcon } from '@/icons';

export default function Home() {
	return (
		<div>
			<ToastSuccessIcon />
			<h1>Compra concluida com sucesso!</h1>
			<RedirectOption
				label='Get to know SalesSync services'
				type='link'
				href={'/'}
			/>
		</div>
	);
}
