'use client';
import Image from 'next/image';
import styled from 'styled-components';
import { Lato } from 'next/font/google';
import { useResponsive } from '@/hook';
import { useRouter } from 'next/navigation';

const lato = Lato({
	subsets: ['latin'],
	weight: ['700'],
});

export default function Home() {
	const { useMobile } = useResponsive();
	const router = useRouter();
	return (
		<StyledMain useMobile={useMobile}>
			<LeftSide useMobile={useMobile}>
				<MainTitle>
					Otimize o seu Processo de Vendas com Facilidade
				</MainTitle>
				<MainSubtitle className={lato.className}>
					Potencialize suas vendas e simplifique seu gerenciamento com
					nosso aplicativo.
				</MainSubtitle>
				<StyledButton onClick={() => router.push('/sign-up')}>
					experimente
				</StyledButton>
			</LeftSide>
			{!useMobile && (
				<Image
					src='/main-image.png'
					alt=''
					width={1000}
					height={1000}
					priority
				/>
			)}
		</StyledMain>
	);
}

interface ResponsivenessProps {
	useMobile: boolean;
}

const StyledMain = styled.main<ResponsivenessProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	height: 100vh;

	${({ useMobile }) =>
		useMobile
			? `
		width: 100%;
		`
			: `
		width: 50%;
		`}

	img {
		height: 100%;
		background: none;
		max-width: 1000px;
		max-height: 1020px;
		margin-left: 400px;
	}
`;

const LeftSide = styled.div<ResponsivenessProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	${({ useMobile }) =>
		!useMobile &&
		`
		width: 50%;
		margin-right: 20px;
		`}
	height: 100vh;

	font-size: 50px;
`;

const MainTitle = styled.h1`
	font-size: 64px;
	font-weight: 700;
	text-align: left;
	margin-bottom: 20px;
`;

const MainSubtitle = styled.h2`
	font-size: 24px;
	font-weight: 600;
	text-align: left;
	margin-bottom: 40px;
`;

const StyledButton = styled.button`
	/* max-width: 415px; */
	width: 100%;
	height: 90px;
	background: var(--accent-color);
	font-size: 24px;
	font-weight: 700;
	text-transform: uppercase;
	color: var(--contrast-text-color);
`;
