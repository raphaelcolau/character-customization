import React, {useState} from 'react';
import SButton from '../_components/SButton';
import { TbEyeClosed } from "react-icons/tb";
import { IoColorPaletteOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ElementProps } from '../../type/type';
import { Title } from '../_components/Title';
import { eyesBrown, hairColors } from '../_assets/assets';
import { setEyesbrows } from '../../store/Slice/Character';
import { SBr } from '../_components/SBr';

export default function MenuEyesbrows() {
    const color = '#707476';
    const currentEyesbrowns = useSelector((state: RootState) => state.character.eyesbrows)
    const [selected, setSelected] = useState<ElementProps>(currentEyesbrowns);
    const dispatch = useDispatch();
  
  
    const handleClick = (hair: ElementProps) => {
      setSelected({element: hair.element, color: hair.color});
      dispatch(setEyesbrows({element: hair.element, color: hair.color}));
    }
  
    return (
      <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', gap: '15px'}}>
  
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', width: '100%', marginTop: '-15px'}}>
          <TbEyeClosed color={color} size={60}/>
          <Title>Choisi tes sourcils</Title>
          <SBr />
        </div>
  
        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
  
          {eyesBrown.map((eyesbrowns, index) => (
            <SButton 
              key={index}
              square
              selected={eyesbrowns.key === currentEyesbrowns.element}
              onClick={() => handleClick({element: eyesbrowns.key, color: selected.color})}
            >
              {eyesbrowns.icon ? 
                <img src={eyesbrowns.icon} alt={eyesbrowns.name} style={{width: '60px'}} />
                :
                <img src={eyesbrowns.assets} alt={eyesbrowns.name} style={{width: '60px'}} />
              }
            </SButton>
          ))}
  
        </div>
  
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', width: '100%', marginTop: '-15px'}}>
          <IoColorPaletteOutline color={color} size={60}/>
          <Title>Couleur des sourcils</Title>
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