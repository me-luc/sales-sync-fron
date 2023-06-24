'use client';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Container>
			{children}
			<ToastContainer />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	padding: 25px;

	h1 {
		font-size: 26px;
		font-weight: 700;
		margin-top: 20px;
	}
`;
