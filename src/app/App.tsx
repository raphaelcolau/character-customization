import React, {useState} from 'react';
import styled from 'styled-components';
import SButton from './_components/SButton';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { GENDER } from '../type/type';
import MenuGender from './Menu/Gender';
import { MenuHair } from './Menu/Hair';
import MenuEyes from './Menu/Eye';
import MenuEyesbrows from './Menu/Eyebrown';
import MenuBeard from './Menu/Beard';
import MenuSkin from './Menu/Skin';
import View from './View/View';

const ControllerContainer = styled.div`
  width: 900px;
  height: 80vh;
  color: #FFFEFF;
  Position: absolute;
  top: calc(50vh - 40vh);
  right: 3vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
`

function Controller() {
  const [selected, setSelected] = useState('gender');
  const gender = useSelector((state: RootState) => state.character.gender);

  const tab = [
    { key: 'gender', value: 'Genre', Component: <MenuGender /> },
    { key: 'skin', value: 'Corp', Component: <MenuSkin />},
    { key: 'hair', value: 'Cheveux', Component: <MenuHair /> },
    { key: 'eyes', value: 'Yeux', Component: <MenuEyes /> },
    { key: 'eyesbrows', value: 'Sourcils', Component: <MenuEyesbrows /> },
  ]

  if (gender === GENDER.MALE) {tab.push({ key: 'beard', value: 'Barbe', Component: <MenuBeard /> })}


  return (
    <ControllerContainer>
      <div
        style={{
          width: '350px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'flex-start',
        }}
      >
        <p style={{fontSize: '1.8em', width: '280px', userSelect: 'none'}}>
          Customise ton apparence
        </p>

        <div
          style={{display: 'flex', flexDirection: 'column', gap: '5px'}}
        >
          {tab.map((item, index) => <SButton 
            key={index}
            tab
            selected={selected === item.key ? true : false}
            onClick={() => setSelected(item.key)}
          >
            {item.value}
          </SButton>)}
        </div>

        <SButton>Terminer</SButton>

      </div>

      <div style={{width: '100%', height: '100%', padding: '20px'}}>
        {tab.filter(item => item.key === selected)[0].Component}
      </div>

    </ControllerContainer>
  )
}

function App() {
  const styles = {
    app: {
      width: '100vw',
      height: '100vh',
      background: 'radial-gradient(circle, rgba(36,47,58,1) 0%, rgba(3,3,3,1) 100%)',
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
