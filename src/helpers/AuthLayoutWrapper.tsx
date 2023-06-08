import { ReactNode, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthenticationContext } from '@/context';
import { toast } from 'react-toastify';

export function AuthLayoutWrapper({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState(false);
	const { isAuthenticated } = useContext(AuthenticationContext);
	const router = useRouter();

	useEffect(() => {
		setLoading(true);
		if (!isAuthenticated) {
			toast.error('Faça login para acessar essa página.');
			router.replace('/sign-in');
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
