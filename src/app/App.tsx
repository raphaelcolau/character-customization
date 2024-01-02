import React, {useState} from 'react';
import styled from 'styled-components';
import SButton from './_components/SButton';
import { GiHairStrands } from "react-icons/gi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { GENDER, AssetProps } from '../type/type';
import { Title } from './_components/Title';
import MenuGender from './Menu/Gender';
import { hairs } from './_assets/assets';



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





const SBr = () => <div style={{width: '100%', height: '2px', backgroundColor: '#707476'}} />



function MenuHair() {
  const color = '#707476';
  const gender = useSelector((state: RootState) => state.character.gender)

  const hairColor = [
    '#FFD6A9',
    '#E3A86F',
    '#D38138',
    '#FFEEB9',
    '#F6D059',
    '#F5B31A',
    '#965C29',
    '#AC5300',
    '#783200',
    '#D6D6D6',
    '#918D98',
    '#4F4A55',
    '#F29159',
    '#9E3D3B',
    '#584B39',
    '#FF8746',
    '#FF6000',
    '#DF3800',
    '#2F2E2E',
    '#FFF392',
    '#FFE700',
    '#FFE3F8',
    '#FFB0E0',
    '#3A1705',
    '#774320',
    '#CC8B33',
    '#E5BA6A',
    '#F4D987',
    '#71584A',
    '#AC8964',
    '#333333',
    '#111111',
  ];

  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>

      <SBr />
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', width: '100%', marginTop: '-15px'}}>
        <GiHairStrands color={color} size={30}/>
        <Title>Choisi tes cheveux</Title>
      </div>

      <div>
        {hairs.filter((hair) => hair.gender === gender).map((hair, index) => (
          <SButton key={index} square selected={index === 3}>
            <img src={hair.assets} alt="" style={{width: '100%', height: '100%'}} />
          </SButton>
        ))}
      </div>

      <SBr />
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', width: '100%', marginTop: '-15px'}}>
        <IoColorPaletteOutline color={color} size={30}/>
        <Title>Couleur des cheveux</Title>
      </div>

      <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
        {hairColor.map((color, index) => (
          <SButton key={index} square selected={index === 3}>
            <div style={{width: '30px', height: '30px', backgroundColor: color}} />
          </SButton>
        ))}
      </div>

    </div>
  )
}

function MenuEyes() {
  return <div>MenuEyes</div>
}

function MenuEyesbrows() {
  return <div>MenuEyesbrows</div>
}

function MenuBeard() {
  return <div>MenuBeard</div>
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
