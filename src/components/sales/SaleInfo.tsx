import Image from 'next/image';
import styled from 'styled-components';

interface SaleInfoProps {
	image: string;
	name: string;
	quantity: number;
	price: number;
}

export function SaleProductInfo({
	image,
	name,
	quantity,
	price,
}: SaleInfoProps) {
	function imageLoader() {
		return image
			? `${process.env.NEXT_PUBLIC_AWS_BUCKET_URL}${image}`
			: './no-product-image.png';
	}

	return (
		<>
			<StyledBox>
				<div style={{ width: '50px', height: '50px' }}>
					<Image
						className='sale-image'
						loader={imageLoader}
						src={imageLoader()}
						alt='product sold'
						width={100}
						height={100}
					/>
				</div>
				<TextInfo>
					<Text>{name}</Text>
					<Text>Qt: {quantity}</Text>
				</TextInfo>

				<Price>R$ {price}</Price>
			</StyledBox>
		</>
	);
}

const StyledBox = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	align-items: center;

	.sale-image {
		width: 50px;
		height: 50px;
		object-fit: cover;
		object-position: center;
	}
`;

const TextInfo = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 23px;
`;

const Text = styled.span`
	font-weight: 500;
	font-size: 15px;

	&:first-child {
		font-weight: 600;
		margin-bottom: 10px;
	}

	text-align: left;
	letter-spacing: 0.75px;
	text-transform: uppercase;
`;

const Price = styled.span`
	width: 100%;
	font-weight: 600;
	font-size: 15px;

	text-align: right;
	letter-spacing: 0.75px;
	text-transform: uppercase;
`;
