import styled from 'styled-components';
import { Lato } from 'next/font/google';
import React from 'react';

interface ProductInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	title: string;
	formData: FormData;
	setPhoto: (photo: string) => void;
	setFile: (file: File) => void;
}

export function ProductFileInput({
	title,
	formData,
	setPhoto,
	setFile,
	...props
}: ProductInputProps) {
	return (
		<>
			<StyledContainer>
				<InputTitle>{title}</InputTitle>
				<StyledLabel htmlFor='file-input'>
					Enviar arquivo
					<Input
						id='file-input'
						type='file'
						{...props}
						hidden
						onChange={handleChange}
					/>
				</StyledLabel>
			</StyledContainer>
			<Line />
		</>
	);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const newFile = event.target.files?.[0];

		if (newFile) {
			setFile(newFile);
			const tempUrl = URL.createObjectURL(newFile);
			setPhoto(tempUrl);

			formData.append('file', newFile);

			console.log('FORM DATA AFTER FILE: ', formData.entries());
		}
	}
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
	background: var(--line-division-color);
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
