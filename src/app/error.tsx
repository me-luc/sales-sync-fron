'use client';
import { RedirectOption } from '@/components';

export default function ErrorPage({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<main>
			<h1>Error</h1>
			<RedirectOption
				href=''
				label='Try again!'
				type='function'
				action={reset}
			/>
		</main>
	);
}
