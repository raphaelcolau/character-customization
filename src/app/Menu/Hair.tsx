import React, {useState} from 'react';
import SButton from '../_components/SButton';
import { GiHairStrands } from "react-icons/gi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { GENDER, ElementProps } from '../../type/type';
import { Title } from '../_components/Title';
import { hairs, hairColors } from '../_assets/assets';
import { setHair } from '../../store/Slice/Character';
import { SBr } from '../_components/SBr';

export function MenuHair() {
    const color = '#707476';
    const [selected, setSelected] = useState<ElementProps>({element: hairs[0].key, color: hairColors[0]});
    const gender: GENDER = useSelector((state: RootState) => state.character.gender)
    const currentHair = useSelector((state: RootState) => state.character.hair)
    const dispatch = useDispatch();
  
  
    const handleClick = (hair: ElementProps) => {
      setSelected({element: hair.element, color: hair.color});
      dispatch(setHair({element: hair.element, color: hair.color}));
    }
  
    return (
      <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', gap: '15px'}}>
  
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', width: '100%', marginTop: '-15px'}}>
          <GiHairStrands color={color} size={60}/>
          <Title>Choisi tes cheveux</Title>
          <SBr />
        </div>
  
        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
  
          {hairs.filter((hair) => hair.gender === gender).map((hair, index) => (
            <SButton 
              key={index}
              square
              selected={hair.key === currentHair.element}
              onClick={() => handleClick({element: hair.key, color: selected.color})}
            >
              <img src={hair.assets} alt="" style={{width: '60px'}} />
            </SButton>
          ))}
  
        </div>
  
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', width: '100%', marginTop: '-15px'}}>
          <IoColorPaletteOutline color={color} size={60}/>
          <Title>Couleur des cheveux</Title>
          <SBr />
        </div>
  
        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
          {hairColors.map((color, index) => (
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