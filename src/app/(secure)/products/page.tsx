'use client';
import { Product } from '@/components';
import { useProduct } from '@/hook';
import { Product as ProductType, ProductParams } from '@/types';
import styled from 'styled-components';

export default function Page() {
	const { products, productsLoading } = useProduct();

	if (productsLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Page</h1>
			<StyledList>
				{products.map((product: ProductType) => (
					<Product
						key={product.id}
						category={product.category}
						title={product.name}
						price={Number(product.price)}
						quantity={product.quantity}
						image={product.photo}
					/>
				))}
			</StyledList>
		</div>
	);
}

const StyledList = styled.ul`
	width: 100%;
	display: grid;
	gap: 10px;
	grid-template-columns: repeat(auto-fit, 150px);
	justify-content: center;
`;
