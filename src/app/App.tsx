import React, {useState} from 'react';
import styled from 'styled-components';
import SButton from './_components/SButton';
import { TbEyeClosed } from "react-icons/tb";
import { IoColorPaletteOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ElementProps } from '../type/type';
import { Title } from './_components/Title';
import MenuGender from './Menu/Gender';
import { eyesBrown, hairColors } from './_assets/assets';
import { setEyesbrows } from '../store/Slice/Character';
import { SBr } from './_components/SBr';
import { MenuHair } from './Menu/Hair';
import MenuEyes from './Menu/Eye';
import MenuEyesbrows from './Menu/Eyebrown';



function View() {
  return <div>View</div>
}

function MenuBeard() {
  return <div>MenuBeard</div>
}

function MenuSkin() {
  return <div>MenuSKin</div>
}

function MenuShape() {
  return <div>MenuShape</div>
}

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

  const tab = [
    { key: 'gender', value: 'Genre', Component: <MenuGender /> },
    { key: 'skin', value: 'Peau', Component: <MenuSkin />},
    { key: 'hair', value: 'Cheveux', Component: <MenuHair /> },
    { key: 'eyes', value: 'Yeux', Component: <MenuEyes /> },
    { key: 'eyesbrows', value: 'Sourcils', Component: <MenuEyesbrows /> },
    { key: 'beard', value: 'Barbe', Component: <MenuBeard />},
    { key: 'shape', value: 'Corpulence', Component: <MenuShape />}
  ]


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
