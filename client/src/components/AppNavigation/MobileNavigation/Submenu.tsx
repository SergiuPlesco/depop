import React from "react";
import ArrowLeft from "../../../assets/ArrowLeft";
import Xmark from "../../../assets/Xmark";
import styled, { css } from "styled-components";

type SubmenuProps = {
  title: string;
  closeSubmenu: () => void;
  closeMobileMenu: () => void;
  isSubmenuVisible: boolean;
  submenu: {
    [key: string]: {
      name: string;
      link: string;
    };
  };
};

type SubmenuContainerProps = {
  isSubmenuVisible: boolean;
};

const Submenu: React.FC<SubmenuProps> = ({
  title,
  closeSubmenu,
  closeMobileMenu,
  isSubmenuVisible,
  submenu,
}) => {
  return (
    <SubmenuContainer isSubmenuVisible={isSubmenuVisible}>
      <div className="w-full relative">
        <div className="flex justify-between items-center pb-6">
          <button className="block" onClick={closeSubmenu}>
            <ArrowLeft />
          </button>
          <button className="block" onClick={closeMobileMenu}>
            <Xmark />
          </button>
        </div>
        <div className="relative w-full">
          <a
            href="#"
            rel="noopener noreferrer"
            className="block text-gray-800 no-underline font-bold text-lg"
          >
            {title}
          </a>
        </div>
        <div className="mt-8 mb-2">
          <ul>
            {/* used for bottom border only */}
            <li className="border-b"></li>
            {Object.values(submenu).map((submenu) => {
              return (
                <li key={submenu.name} className="border-b">
                  <a
                    href="#"
                    className="flex justify-between items-center py-3 cursor-pointer no-underline w-full text-sm m-0 text-gray-600"
                  >
                    {submenu.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
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
  transition: all 0.4s ease 0s;
  ${(props) =>
    props.isSubmenuVisible
      ? css`
          left: 0;
        `
      : css`
          left: -100%;
        `}
`;
