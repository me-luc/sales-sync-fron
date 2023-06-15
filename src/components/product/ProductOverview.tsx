import Image from 'next/image';
import styled from 'styled-components';
import { ActionButton } from './ActionButton';
import { ButtonType } from '@/types';
import { useProduct } from '@/hook';

interface ProductOverviewProps {
	setShowOverview: (show: boolean) => void;
	id: number;
	category?: string;
	title: string;
	price: number;
	quantity: number;
	image?: string;
}

export function ProductOverview({
	setShowOverview,
	category,
	title,
	price,
	quantity,
	image,
	id,
}: ProductOverviewProps) {
	const { deleteProduct } = useProduct();
	function imageLoader() {
		return image
			? `${process.env.NEXT_PUBLIC_AWS_BUCKET_URL}${image}`
			: './no-product-image.png';
	}

	return (
		<BlurrBackground onClick={handleClick}>
			<ProductBox>
				<Image
					loader={imageLoader}
					src='/no-product-image.png'
					alt='product image'
					width={145}
					height={145}
					className='product-image-overview'
				/>
				<InfoBox>
					<Category>{category}</Category>
					<Title>{title}</Title>
					<CountBox>
						<Quantity>QT: {quantity} </Quantity>
						<Price>R$ {price}</Price>
					</CountBox>
				</InfoBox>

				<ActionButton
					name='Vender'
					onClick={() => {}}
					type={ButtonType.highlight}
				/>
				<ActionButton name='Editar' onClick={() => {}} />
				<ActionButton name='Deletar' onClick={handleDelete} />
			</ProductBox>
		</BlurrBackground>
	);

	function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		event.stopPropagation();
		if (event.target !== event.currentTarget) return;
		setShowOverview(false);
	}

	function handleDelete() {
		deleteProduct(id);
		setShowOverview(false);
	}
}

const BlurrBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(14, 14, 14, 0.7);
	backdrop-filter: blur(5px);
	z-index: 1;
`;

const ProductBox = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: auto;
	background-color: var(--base-color);

	display: flex;
	flex-wrap: wrap;
	padding: 25px;

	.product-image-overview {
		width: 145px;
		height: 145px;
		object-fit: cover;
		margin: 0;
		margin-right: 20px;
	}
`;

const InfoBox = styled.div`
	display: flex;
	height: 145px;
	flex-direction: column;
	align-items: start;
	justify-content: space-around;

	text-align: left;
	margin-bottom: 25px;
`;

const CountBox = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Title = styled.h3`
	font-weight: 600;
	font-size: 20px;
	line-height: 125%;
	letter-spacing: 0.75px;
	text-transform: uppercase;
	color: var(--primary-text-color);
`;

const Category = styled.span`
	font-weight: 400;
	font-size: 13px;
	line-height: 125%;
	text-align: center;
	letter-spacing: 0.75px;
	color: var(--tertiery-text-color);
	margin-bottom: 5px;
`;

const Price = styled.span`
	font-weight: 700;
	font-size: 18px;
	text-align: center;
	letter-spacing: 0.75px;
	color: var(--primary-text-color);
`;

const Quantity = styled.span`
	font-weight: 700;
	font-size: 18px;
	text-align: center;
	letter-spacing: 0.75px;
	color: var(--accent-color);
`;
