import React from 'react';
import styled from 'styled-components';

export default function SButton({selected, children, tab, onClick}: {selected?: boolean, children: React.ReactNode, tab?: boolean, onClick?: () => void}) {
    const color = selected ? '#FFFEFF' : '#707476';
    const StyledButton = styled.button`
      width: 280px;
      height: ${tab ? '70px': '50px'};
      background-color: ${selected ? '#080C10' : 'transparent'};
      color: ${color};
      border: 2px solid ${color};
      border-right: ${tab ? `8px solid ${color}` : 'auto'};
      transition: 0.2s;
      outline: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: ${tab ? 'flex-start' : 'center'};
      padding-left: ${tab ? '20px' : '0'};
      &:hover {
        color: #FFFEFF;
        border: 2px solid #FFFEFF;
        border-right: ${tab ? `8px solid #FFFEFF` : 'auto'};
        transition: 0.2s;
      }
      &:active {
        color: #B5B9BA;
        border: 2px solid #B5B9BA;
        border-right: ${tab ? `8px solid #B5B9BA` : 'auto'};
        transition: 0.2s;
      }
    `;

    const handleClick = () => {
      const audio = new Audio('/assets/sounds/click.ogg');
      audio.play();
      if (onClick) onClick();
    }

    return (
      <StyledButton onClick={handleClick}>
        <p style={{
          fontSize: '1.6em',
          textTransform: 'uppercase',
          userSelect: 'none',
        }}>
          {children}
        </p>
      </StyledButton>
    )
  }