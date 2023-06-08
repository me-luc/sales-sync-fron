'use client';
import { ResponsiveBars } from '@/components';
import { AuthLayoutWrapper } from '@/helpers';
import { useResponsive } from '@/hook/useResponsive';
import { ToastContainer } from 'react-toastify';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	const { useMobile } = useResponsive();
	return (
		<AuthLayoutWrapper>
			<div
				className={
					useMobile ? 'secure-layout-mobile' : 'secure-layout'
				}>
				{children}
			</div>
			<ResponsiveBars />
			<ToastContainer />
		</AuthLayoutWrapper>
	);
}
