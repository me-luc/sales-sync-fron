'use client';
import { ToastContainer } from 'react-toastify';

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='auth-layout'>
			{children}
			<ToastContainer />
		</div>
	);
}
