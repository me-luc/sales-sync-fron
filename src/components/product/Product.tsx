import { Lato } from 'next/font/google';
import Image from 'next/image';
import styled from 'styled-components';
import { ProductOverview } from './ProductOverview';
import { useContext, useState } from 'react';
import { ProductsContext } from '@/context/ProductsContext';
import { ProductSale } from '@/types';

const lato = Lato({ weight: '700', subsets: ['latin'] });

interface ProductProps {
	id: number;
	category?: string;
	title: string;
	price: number;
	quantity: number;
	image?: string;
	editingMultiple: boolean;
	setShowOverview: (value: boolean) => void;
}

export function Product({
	category,
	title,
	price,
	quantity,
	image,
	id,
	editingMultiple,
	setShowOverview,
}: ProductProps) {
	const { products, setProducts } = useContext(ProductsContext);
	const [selected, setSelected] = useState(false);

	function imageLoader() {
		return image
			? `${process.env.NEXT_PUBLIC_AWS_BUCKET_URL}${image}`
			: './no-product-image.png';
	}

	return (
		<StyledProduct
			onClick={handleClick}
			selected={selected && editingMultiple}>
			<Image
				loader={imageLoader}
				src='/no-product-image.png'
				alt='product image'
				width={100}
				height={190}
				className='product-image'
			/>

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

	function handleClick(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
		event.stopPropagation();
		if (!editingMultiple) return setShowOverview(true);

		const newProduct = {
			category,
			name: title,
			price,
			quantity,
			photo: image,
			id,
		} as ProductSale;

		const productsArr = products;
		if (products.find((product) => product.id === id)) {
			const index = productsArr.findIndex((product) => product.id === id);
			productsArr.splice(index, 1);
			setSelected(false);
			setProducts(productsArr);
			return;
		}

		setSelected(true);
		productsArr.push(newProduct);
		setProducts(productsArr);
	}
}

interface StyledProductProps {
	selected?: boolean;
}

const StyledProduct = styled.li<StyledProductProps>`
	width: 150px;
	max-width: 240px;
	height: 300px;
	overflow: hidden;
	cursor: pointer;

	transition: all 0.2s ease-in-out;

	${({ selected }) => selected && 'border: 3px solid var(--accent-color);'}

	.product-image {
		width: 100%;
		height: 190px;
		object-fit: cover;
		margin: 0;
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

	padding: 10px 13px;
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
