import React, {useState} from 'react';
import SButton from '../_components/SButton';
import { IoIosBody } from "react-icons/io";
import { IoColorPaletteOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ElementProps } from '../../type/type';
import { Title } from '../_components/Title';
import { skinColors, skinShape } from '../_assets/assets';
import { setSkin } from '../../store/Slice/Character';
import { SBr } from '../_components/SBr';

export default function MenuSkin() {
    const color = '#707476';
    const currentSkin = useSelector((state: RootState) => state.character.skin)
    const [selected, setSelected] = useState<ElementProps>(currentSkin);
    const dispatch = useDispatch();
  
  
    const handleClick = (skin: ElementProps) => {
      setSelected({element: skin.element, color: skin.color});
      dispatch(setSkin({element: skin.element, color: skin.color}));
    }
  
    return (
      <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', gap: '15px'}}>
  
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', width: '100%', marginTop: '-15px'}}>
          <IoIosBody color={color} size={60}/>
          <Title>Choisi ta corpulence</Title>
          <SBr />
        </div>
  
        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
  
          {skinShape.map((skin, index) => (
            <SButton 
              key={index}
              square
              selected={skin.key === currentSkin.element}
              onClick={() => handleClick({element: skin.key, color: selected.color})}
            >
              <img src={skin.assets} alt="" style={{width: '60px'}} />
            </SButton>
          ))}
  
        </div>
  
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', width: '100%', marginTop: '-15px'}}>
          <IoColorPaletteOutline color={color} size={60}/>
          <Title>Couleur ta couleur de peau</Title>
          <SBr />
        </div>
  
        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
          {skinColors.map((color, index) => (
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