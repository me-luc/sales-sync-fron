import { AddIcon, HomeIcon, SearchIcon, UserIcon, FavoriteIcon } from '@/icons';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

export default function BottomBar() {
	const router = useRouter();

	return (
		<StyledBottomBar>
			<button onClick={() => router.push('/home')}>
				<HomeIcon className='icon clickable' />
			</button>

			<button onClick={() => router.push('/home')}>
				<SearchIcon className='icon clickable' />
			</button>

			<button onClick={() => router.push('/add-product')}>
				<AddIcon className='icon clickable' />
			</button>

			<button onClick={() => router.push('/home')}>
				<FavoriteIcon className='icon clickable' />
			</button>

			<button onClick={() => router.push('/home')}>
				<UserIcon className='icon clickable' />
			</button>
		</StyledBottomBar>
	);
}

const StyledBottomBar = styled.nav`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100vw;
	height: var(--bar-height);
	filter: drop-shadow(0px 3px 10px rgba(52, 58, 58, 0.169));

	padding: 30px 45px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background: var(--primary-background-color);

	button {
		background: none;
	}
`;
