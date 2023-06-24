import styled from 'styled-components';
import { Logo } from '../Logo';
import { useRouter } from 'next/navigation';

export default function DestopTopBar() {
	const router = useRouter();
	return (
		<StyledDesktopTopBar>
			<Logo size={30} className='title-bar' />
			<MenuOptions>
				<button onClick={() => router.push('/home')}>Home</button>

				<button onClick={() => router.push('/products')}>
					Products
				</button>

				<button onClick={() => router.push('/add-product')}>
					Add new product
				</button>

				<button onClick={() => router.push('/sales')}>Sales</button>

				<button onClick={() => router.push('/my-profile')}>
					Profile
				</button>
			</MenuOptions>
		</StyledDesktopTopBar>
	);
}

const StyledDesktopTopBar = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: var(--bar-height);
	background: var(--primary-background-color);
	filter: drop-shadow(0px 3px 10px rgba(52, 58, 58, 0.169));

	padding: 15px 45px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.title-bar {
		margin: 0;
	}
`;

const MenuOptions = styled.div`
	button {
		color: var(--primary-text-color);
		text-align: center;
		font-size: 18px;
		background: none;
	}

	button:not(:last-child) {
		margin-right: 40px;
	}
`;
