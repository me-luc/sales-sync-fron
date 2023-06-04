import '@/styles/reset.css';
import '@/styles/globals.css';
import { Montserrat, Roboto } from 'next/font/google';
import { QueryClientWrapper } from '@/context';
import 'react-toastify/dist/ReactToastify.css';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });
const montserrat = Montserrat({
	subsets: ['latin'],
});

export const metadata = {
	title: 'Sales Sync',
	description: 'An application made for solo entrepreneurs.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<QueryClientWrapper>
				<body className={montserrat.className}>{children}</body>
			</QueryClientWrapper>
		</html>
	);
}
