import styled from 'styled-components';
import { ActionButton } from './ActionButton';
import { ButtonType, ProductSale } from '@/types';
import { useAuth, useProduct, useSales } from '@/hook';
import { useContext, useState } from 'react';
import { AuthenticationContext } from '@/context';
import { Toast } from '../Toast';
import { ProductOverviewItem } from './ProductOverviewItem';

interface ProductOverviewProps {
	setShowOverview: (show: boolean) => void;
	products: ProductSale[];
}

export function ProductOverview({
	setShowOverview,
	products,
}: ProductOverviewProps) {
	const [showInfoMissing, setShowInfoMissing] = useState(false);
	const { user } = useContext(AuthenticationContext);
	const { deleteProduct } = useProduct();
	const { sellManually, getPaymentLink } = useSales(() =>
		setShowOverview(false)
	);
	const { getAccountUpdateLink } = useAuth();

	return (
		<Toast type='custom' setShow={setShowOverview}>
			<Container>
				{showInfoMissing && (
					<Toast
						type='warning'
						setShow={setShowInfoMissing}
						buttonType='both'
						message='Configure alguns detalhes para conseguir enviar links de pagamento!'
						continueAction={handleContinue}
					/>
				)}

				{products.map((product) => (
					<ProductOverviewItem
						key={product.id}
						id={product.id}
						category={product.category}
						title={product.name}
						price={product.price}
						quantity={product.quantity}
						image={product.photo}
					/>
				))}

				<ActionButton
					name='Link de pagamento'
					onClick={handlePaymentLink}
					type={ButtonType.highlight}
				/>
				<ActionButton
					name='Vender (manual)'
					onClick={() => sellManually(products)}
				/>
				<ActionButton name='Editar' onClick={() => {}} />
				<ActionButton name='Deletar' onClick={handleDelete} />
			</Container>
		</Toast>
	);

	function handleDelete() {
		deleteProduct(id);
		setShowOverview(false);
	}

	function handlePaymentLink() {
		if (!user?.stripeCompletedProfile) {
			return setShowInfoMissing(true);
		}
		getPaymentLink(id);
	}

	function handleContinue() {
		getAccountUpdateLink();
		setShowInfoMissing(false);
	}
}

const Container = styled.div`
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
