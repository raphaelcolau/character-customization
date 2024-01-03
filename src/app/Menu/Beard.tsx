import React, {useState} from 'react';
import SButton from '../_components/SButton';
import { GiBeard } from "react-icons/gi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ElementProps } from '../../type/type';
import { Title } from '../_components/Title';
import { beards, hairColors } from '../_assets/assets';
import { setBeard } from '../../store/Slice/Character';
import { SBr } from '../_components/SBr';

export default function MenuBeard() {
    const color = '#707476';
    const currentBeard = useSelector((state: RootState) => state.character.beard)
    const [selected, setSelected] = useState<ElementProps>(currentBeard);
    const dispatch = useDispatch();
  
  
    const handleClick = (beard: ElementProps) => {
      setSelected({element: beard.element, color: beard.color});
      dispatch(setBeard({element: beard.element, color: beard.color}));
    }
  
    return (
      <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', gap: '15px'}}>
  
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', width: '100%', marginTop: '-15px'}}>
          <GiBeard color={color} size={60}/>
          <Title>Choisi ta barbe</Title>
          <SBr />
        </div>
  
        <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
  
          {beards.map((beard, index) => (
            <SButton 
              key={index}
              square
              selected={beard.key === currentBeard.element}
              onClick={() => handleClick({element: beard.key, color: selected.color})}
            >
              {beard.icon ? 
                <img src={beard.icon} alt={beard.name} style={{width: '60px'}} />
                :
                <img src={beard.assets} alt={beard.name} style={{width: '60px'}} />
              }
            </SButton>
          ))}
  
        </div>
  
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', width: '100%', marginTop: '-15px'}}>
          <IoColorPaletteOutline color={color} size={60}/>
          <Title>Couleur de la barbe</Title>
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