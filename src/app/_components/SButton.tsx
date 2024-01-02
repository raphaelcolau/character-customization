import React from 'react';
import styled from 'styled-components';

const StyledButton = styled('button')<{selected?: boolean, tab?: boolean, color: string}>`
    ${props => `
        width: ${props.tab ? `${props.selected ? '290px' : '280px'}` : '280px'};
        height: ${props.tab ? '70px': '50px'};
        background-color: ${props.selected ? '#080C1060' : 'transparent'};
        color: ${props.color};
        border: 2px solid ${props.color};
        border-right: ${props.tab ? `8px solid ${props.color}` : 'auto'};
        transition: 0.2s;
        outline: none;
        cursor: ${props.onClick ? `${props.selected ? 'default' : 'pointer'}` : 'default'};
        display: flex;
        align-items: center;
        justify-content: ${props.tab ? 'flex-start' : 'center'};
        padding-left: ${props.tab ? '20px' : '0'};
        &:hover {
        color: #FFFEFF;
        border: 2px solid #FFFEFF;
        border-right: ${props.tab ? `8px solid #FFFEFF` : 'auto'};
        width: ${props.tab ? '290px' : '280px'};
        transition: 0.2s;
        
        ${!props.selected && `
            &:active {
                color: #B5B9BA;
                border: 2px solid #B5B9BA;
                border-right: ${props.tab ? `8px solid #B5B9BA` : 'auto'};
                transition: 0.2s;
            }
        `}
        
    `}
`;

const StyledSquareButton = styled('button')<{selected?: boolean}>`
    width: fit-content;
    aspect-ratio: 1/1;
    background-color: transparent;
    color: #707476;
    transition: 0.2s;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    position: relative;
    border: 2px solid #FFFEFF; 
    
    ${props => !props.selected && `
    border: 2px solid #707476; 
    cursor: pointer;
    &:active {
        color: #B5B9BA;
        border: 2px solid #B5B9BA;
        transition: 0.2s;
    }
    &:hover {
        color: #FFFEFF;
        border: 2px solid #FFFEFF;
        transition: 0.2s;
    }
    `}
    
    ${props => props.selected && `
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            width: max(40%, 15px);
            height: max(40%, 15px);
            background-color: #56A5E2;
            clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
        }
    `}
`;

export default function SButton({selected, children, tab, onClick, square}: {selected?: boolean, children: React.ReactNode, tab?: boolean, onClick?: Function, square?: boolean}) {
    const color = selected ? '#FFFEFF' : '#707476';

    const handleClick = () => {
      const audio = new Audio('/assets/sounds/click.ogg');
      if (selected) return;
      audio.play();
      if (onClick) onClick();
    }

    return (
        square ?
        <StyledSquareButton onClick={handleClick} selected={selected}>
            {children}
        </StyledSquareButton>
        : 
        <StyledButton tab={tab} selected={selected} color={color} onClick={handleClick}>
            <p style={{ fontSize: '1.6em', textTransform: 'uppercase', userSelect: 'none' }}>
            {children}
            </p>
        </StyledButton>
    )
  }