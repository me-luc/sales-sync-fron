'use client';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthenticationContext } from '@/context';
import { toast } from 'react-toastify';

export function AuthLayoutWrapper({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState(false);
	const { isAuthenticated, finishedLoading } = useContext(
		AuthenticationContext
	);
	const router = useRouter();

	useEffect(() => {
		if (!finishedLoading) return;
		setLoading(true);
		if (!isAuthenticated) {
			toast.error('Faça login para acessar essa página.');
			router.push('/sign-in');
		}
		setLoading(false);
	}, [isAuthenticated, router]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (isAuthenticated) {
		return <>{children}</>;
	}

	return null;
}
