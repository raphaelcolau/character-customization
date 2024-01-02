import React from 'react';
import styled from 'styled-components';

function View() {
  const styles = {
    view: {
      width: '100vw',
      height: '100vh',
      color: '#FFFEFF',
    },
  }

  return (
    <div style={styles.view}>
      View
    </div>
  )
}



function Controller() {
  const ControllerContainer = styled.div`
    width: 50vw;
    height: 80vh;
    color: #FFFEFF;
    Position: absolute;
    top: calc(50vh - 40vh);
    left: 45%;
    border: 1px solid red;
  `

  const SButton = ({selected, children, tab}: {selected?: boolean, children: React.ReactNode, tab?: boolean}) => {
    const color = selected ? '#FFFEFF' : '#707476';
    const StyledButton = styled.button`
      width: 250px;
      height: ${tab ? '70px': '50px'};
      background-color: ${selected ? '#080C10' : 'transparent'};
      color: #707476;
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

    }

    return (
      <StyledButton onClick={handleClick}>
        <p style={{
          fontSize: '1.6em',
          textTransform: 'uppercase',
        }}>
          {children}
        </p>
      </StyledButton>
    )
  }

  return (
    <ControllerContainer>
      Controller
      <SButton tab>Genre</SButton>
      <SButton>Terminer</SButton>
    </ControllerContainer>
  )
}

function App() {
  const styles = {
    app: {
      width: '100vw',
      height: '100vh',
      backgroundColor: '#030303',
      color: '#FFFEFF',
      overflow: 'hidden',
      Position: 'relative',
    },
  }

  return (
    <div style={styles.app}>
      <View />
      <Controller />
    </div>
  );
}

export default App;
