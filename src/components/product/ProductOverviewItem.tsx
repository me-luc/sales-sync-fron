import { ProductsContext } from '@/context/ProductsContext';
import Image from 'next/image';
import { useContext, useState } from 'react';
import styled from 'styled-components';

interface ProductOverviewItemProps {
	id: number;
	category?: string;
	title: string;
	price: number;
	image?: string;
}

export function ProductOverviewItem({
	category,
	title,
	price,
	image,
	id,
}: ProductOverviewItemProps) {
	const [quantity, setQuantity] = useState(1);
	const { products, setProducts } = useContext(ProductsContext);

	function imageLoader() {
		return image
			? `${process.env.NEXT_PUBLIC_AWS_BUCKET_URL}${image}`
			: './no-product-image.png';
	}

	return (
		<ProductBox className='PRODUCT BOX'>
			<LeftBox>
				<Image
					loader={imageLoader}
					src='/no-product-image.png'
					alt='product image'
					width={145}
					height={145}
					className='product-image-overview'
				/>
				<InfoBox>
					<Category>{category || 'Geral'}</Category>
					<Title>{title}</Title>
					<CountBox>
						<Price>R$ {price * quantity}</Price>
					</CountBox>
				</InfoBox>
			</LeftBox>

			<QuantityBox>
				<QuantityButton onClick={addQuantity}>+</QuantityButton>
				<Quantity>{quantity}</Quantity>
				<QuantityButton onClick={removeQuantity}>-</QuantityButton>
			</QuantityBox>
		</ProductBox>
	);

	function addQuantity() {
		setQuantity(quantity + 1);
		updateProductCount('add');
	}

	function removeQuantity() {
		if (quantity === 1) return;
		setQuantity(quantity - 1);
		updateProductCount('remove');
	}

	function updateProductCount(type: 'add' | 'remove') {
		const productsArr = products;
		const index = productsArr.findIndex((product) => product.id === id);
		if (type === 'add') productsArr[index].desiredQuantity++;
		if (type === 'remove') productsArr[index].desiredQuantity--;
		setProducts(productsArr);
	}
}

const ProductBox = styled.div`
	display: flex;
	width: 100%;
	height: 145px;
	margin-bottom: 25px;
	justify-content: space-between;
`;

const InfoBox = styled.div`
	display: flex;
	width: 100%;
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
	margin-top: -30px;
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

const LeftBox = styled.div`
	display: flex;
	width: 100%;
	height: 145px;
`;

const Quantity = styled.span`
	font-weight: 700;
	font-size: 18px;
	text-align: center;
	letter-spacing: 0.75px;
	color: var(--accent-color);
`;

const QuantityBox = styled.div`
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin-left: 40px;
`;

const QuantityButton = styled.button`
	width: 45px;
	height: 45px;
	background: none;
	border: 1px solid var(--line-division-color);
	border-radius: 30%;

	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 700;
	font-size: 30px;
	line-height: 125%;

	text-align: center;
	letter-spacing: 0.75px;

	color: var(--primary-text-color);

	display: flex;
	align-items: center;
	justify-content: center;
`;
