import React from 'react';
import styled from 'styled-components';

export interface SemesterButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  isClicked: boolean;
  children?: React.ReactNode;
}

const Button = styled.button<SemesterButtonProps>`
  display: flex;
  width: 88px;
  height: 28px;
  border-radius: 3.638px;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 103.949%;

  ${({ isClicked }) =>
    isClicked
      ? `
      background: #d85888;
      color: #FFF;
      `
      : `
      background: none;
      color: #DFDFDF;
    `};

  ${({ isClicked }) =>
    !isClicked &&
    `
    &:hover {
      animation-timing-function: ease-in-out;
      animation-duration: 300ms;
      color: #d85888;
    }
  `};
`;

export default function SemesterButton(props: SemesterButtonProps) {
  const { children = '1지망', isClicked = true, ...rest } = props;
  return (
    <Button isClicked={isClicked} {...rest}>
      {children}
    </Button>
  );
}