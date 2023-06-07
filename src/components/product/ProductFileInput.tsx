import styled from 'styled-components';
import { Lato } from 'next/font/google';
import React from 'react';

interface ProductInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	title: string;
}

export function ProductFileInput({ title, ...props }: ProductInputProps) {
	return (
		<>
			<StyledContainer>
				<InputTitle>{title}</InputTitle>
				<StyledLabel htmlFor='file-input'>
					Enviar arquivo
					<Input id='file-input' type='file' {...props} hidden />
				</StyledLabel>
			</StyledContainer>
			<Line />
		</>
	);
}

const StyledContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-top: 15px;
`;

const InputTitle = styled.h4`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 125%;
	text-align: center;
	letter-spacing: 0.75px;

	color: var(--tertiery-text-color);
`;

const Line = styled.div`
	height: 0.5px;
	width: 100%;
	background: #cbd7e1;
	margin: 20px 0;
`;

const StyledLabel = styled.label`
	width: 185px;
	background-color: var(--base-color);
	font-size: 16px;
	line-height: 125%;
	text-align: center;
	letter-spacing: 0.75px;

	padding: 5px 10px;
	color: var(--tertiery-text-color);

	cursor: pointer;
	padding: 10px 20px;
	border-radius: var(--border-radius);
`;

const Input = styled.input`
	font-weight: 700;
	font-size: 16px;
`;
