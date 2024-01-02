import React, {useState} from 'react';
import SButton from '../_components/SButton';
import { FaRegEye } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ElementProps } from '../../type/type';
import { Title } from '../_components/Title';
import { eyesColors } from '../_assets/assets';
import { setEyes } from '../../store/Slice/Character';
import { SBr } from '../_components/SBr';

export default function MenuEyes() {
    const color = '#707476';
    const currentEyes = useSelector((state: RootState) => state.character.eyes)
    const [selected, setSelected] = useState<ElementProps>(currentEyes);
    const dispatch = useDispatch();
  
  
    const handleClick = (eyes: ElementProps) => {
      setSelected({element: eyes.element, color: eyes.color});
      dispatch(setEyes({element: eyes.element, color: eyes.color}));
    }
  
    return (
      <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', gap: '15px'}}>
  
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', width: '100%', marginTop: '-15px'}}>
          <FaRegEye  color={color} size={60}/>
          <Title>Couleur des yeux</Title>
          <SBr />
        </div>
  
        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
          {eyesColors.map((color, index) => (
            <SButton
              key={index}
              square
              selected={color === selected.color}
              onClick={() => handleClick({element: selected.element, color: color})}
            >
              <div style={{width: '30px', height: '30px', backgroundColor: color}} />
            </SButton>
          ))}
        </div>
  
      </div>
    )
  }