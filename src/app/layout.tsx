import '@/styles/reset.css';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import { AuthenticationProvider, QueryClientWrapper } from '@/context';
import 'react-toastify/dist/ReactToastify.css';

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
		<html lang='pt-br'>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				{/* <meta name='theme-color' content='#000000' /> */}
				<meta name='description' content={metadata.description} />
				<link rel='icon' href='/favicon.ico' />
				<link rel='manifest' href='/manifest.json' />
				<link rel='apple-touch-icon' href='/logo192.png' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link rel='shortcut icon' href='/favicon.ico' />
			</head>
			<QueryClientWrapper>
				<body className={montserrat.className}>{children}</body>
			</QueryClientWrapper>
		</html>
	);
}
