import { Lato } from 'next/font/google';
import Image from 'next/image';
import styled from 'styled-components';

const lato = Lato({ weight: '700', subsets: ['latin'] });

interface ProductProps {
	category?: string;
	title: string;
	price: number;
	quantity: number;
	image?: string;
}

export function Product({
	category,
	title,
	price,
	quantity,
	image,
}: ProductProps) {
	const imagePath = image || './no-product-image.png';

	return (
		<StyledProduct>
			<img src={imagePath} alt='product image' fill={true} />

			<InfoBox>
				<Category className={lato.className}>
					{category || 'Categoria'}
				</Category>
				<Title>{title}</Title>
				<PriceBox>
					<Quantity className={lato.className}>{quantity}</Quantity>
					<Price>R$ {price.toFixed(2)}</Price>
				</PriceBox>
			</InfoBox>
		</StyledProduct>
	);
}

const StyledProduct = styled.li`
	width: 150px;
	max-width: 240px;
	height: 300px;
	overflow: hidden;

	img {
		width: 100%;
		height: 190px;
		object-fit: cover;
		margin: 0;
		background: var(--image-background-color);
	}
`;

const Category = styled.span`
	font-weight: 400;
	font-size: 11px;
	line-height: 125%;
	text-align: center;
	letter-spacing: 0.75px;
	color: var(--tertiery-text-color);
	margin-bottom: 5px;
`;

const Title = styled.h3`
	font-weight: 400;
	font-size: 13px;
	line-height: 125%;
	letter-spacing: 0.75px;
	text-transform: capitalize;
	color: var(--primary-text-color);
`;

const InfoBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;

	padding: 15px 20px;
`;

const PriceBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-top: 10px;
`;

const Quantity = styled.span`
	font-weight: 700;
	font-size: 13px;
	text-align: center;
	letter-spacing: 0.75px;
	color: var(--accent-color);
`;

const Price = styled.span`
	font-weight: 700;
	font-size: 15px;
	line-height: 125%;
	text-align: center;
	letter-spacing: 0.75px;
	color: var(--primary-text-color);
`;
