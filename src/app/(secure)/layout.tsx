'use client';
import { ResponsiveBars } from '@/components';
import { useResponsive } from '@/hook/useResponsive';
import { ToastContainer } from 'react-toastify';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	const { useMobile } = useResponsive();
	return (
		<>
			<div
				className={
					useMobile ? 'secure-layout-mobile' : 'secure-layout'
				}>
				{children}
			</div>
			<ResponsiveBars />
			<ToastContainer />
		</>
	);
}
