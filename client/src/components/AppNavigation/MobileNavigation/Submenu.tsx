import React from "react";
import ArrowLeft from "../../../assets/ArrowLeft";
import Xmark from "../../../assets/Xmark";
import styled, { css } from "styled-components";

type SubmenuProps = {
	title: string;
	closeSubmenu: () => void;
	isSubmenuVisible: boolean;
};

type SubmenuContainerProps = {
	isSubmenuVisible: boolean;
};

const Submenu: React.FC<SubmenuProps> = ({ title, closeSubmenu, isSubmenuVisible }) => {
	return (
		<SubmenuContainer isSubmenuVisible={isSubmenuVisible}>
			<div className="flex justify-between items-center">
				<button className="block" onClick={closeSubmenu}>
					<ArrowLeft />
				</button>
				<button className="block">
					<Xmark />
				</button>
			</div>
			<div className="relative w-full">{title}</div>
		</SubmenuContainer>
	);
};

export default Submenu;

const SubmenuContainer = styled.div<SubmenuContainerProps>`
	position: fixed;
	top: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
	background-color: #fff;
	padding: 1.5rem;
	overflow-y: auto;
	${(props) =>
		props.isSubmenuVisible
			? css`
					left: 0;
			  `
			: css`
					left: -100%;
			  `}
`;
