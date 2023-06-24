'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Product, ProductOverview } from '@/components';
import { SearchProduct } from '@/components/product/SearchProduct';
import { useProduct } from '@/hook';
import { SelectMultipleIcon, ToastSuccessIcon } from '@/icons';
import { Product as ProductType } from '@/types';

export default function Page() {
	const [showOverview, setShowOverview] = useState(false);
	const [editingMultiple, setEditingMultiple] = useState(false);
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

	if (!products.length) {
		return <div>No products</div>;
	}

	return (
		<div>
			<TopBar>
				<SearchProduct value={filter} setValue={setFilter} />
				<IconButton onClick={editMultiple}>
					<SelectMultipleIcon selected={editingMultiple} />
				</IconButton>
			</TopBar>

			{showOverview && (
				<ProductOverview setShowOverview={setShowOverview} />
			)}
			<StyledList>
				{filteredProducts.map((product: ProductType) => (
					<Product
						id={Number(product.id)}
						key={product.id}
						category={product.category}
						title={product.name}
						price={Number(product.price)}
						quantity={product.quantity}
						image={product.photo}
						editingMultiple={editingMultiple}
						setShowOverview={setShowOverview}
					/>
				))}
			</StyledList>
			{editingMultiple && (
				<ContinueButton onClick={handleContinue}>
					<ToastSuccessIcon />
				</ContinueButton>
			)}
		</div>
	);

	function handleContinue() {
		setShowOverview(true);
	}

	function editMultiple() {
		setEditingMultiple((prev) => !prev);
	}
}

const StyledList = styled.ul`
	width: 100%;
	display: grid;
	gap: 10px;
	grid-template-columns: repeat(auto-fit, 150px);
	justify-content: center;
`;

const ContinueButton = styled.button`
	width: 50px;
	height: 50px;
	background: none;
	border: none;
	cursor: pointer;

	position: fixed;
	bottom: 100px;
	right: 35px;
`;

const IconButton = styled.button`
	background: none;
	border: none;
`;

const TopBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: auto;

	margin-bottom: 25px;
`;
