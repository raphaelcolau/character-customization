import * as React from 'react';
import { useState } from 'react';
import { BiMaleFemale } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { GENDER } from '../../type/type';
import { setGender } from '../../store/Slice/Character';
import { Title } from '../_components/Title';
import SButton from '../_components/SButton';

export default function MenuGender() {
    const color = '#707476';
    const gender = useSelector((state: RootState) => state.character.gender);
    const [selected, setSelected] = useState<GENDER>(gender)
    const dispatch = useDispatch();
  
    const handleGender = (gender: GENDER) => {
      dispatch(setGender(gender))
      setSelected(gender);
    }
  
    return (
      <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
  
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', width: '100%'}}>
          <BiMaleFemale color={color} size={30}/>
          <Title>Choisi ton genre</Title>
        </div>
  
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
          <SButton selected={selected === GENDER.MALE} onClick={() => handleGender(GENDER.MALE)}>Homme</SButton>
          <SButton selected={selected === GENDER.FEMALE} onClick={() => handleGender(GENDER.FEMALE)}>Femme</SButton>
        </div>
  
      </div>
    )
  }