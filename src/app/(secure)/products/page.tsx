'use client';
import { Product } from '@/components';
import { SearchProduct } from '@/components/product/SearchProduct';
import { useProduct } from '@/hook';
import { Product as ProductType, ProductParams } from '@/types';
import { use, useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Page() {
	const { products, productsLoading } = useProduct();
	const [filter, setFilter] = useState('');
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const filtered = products.filter((product: ProductType) =>
			product.name.toLowerCase().includes(filter.toLowerCase())
		);
		setFilteredProducts(filtered);
	}, [filter, products]);

	if (productsLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<SearchProduct value={filter} setValue={setFilter} />
			<StyledList>
				{filteredProducts.map((product: ProductType) => (
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
