import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character, ElementProps, GENDER } from '../../type/type';
import { beards, eyes, eyesBrown, eyesColors, hairColors, hairs, skinColors, skinShape } from '../../app/_assets/assets';

const initialState: Character = {
    firstName: '',
    lastName: '',
    gender: GENDER.MALE,
    age: 18,
    description: '',
    hair: {
        element: hairs[0].key,
        color: hairColors[0]
    },
    eyes: {
        element: eyes[0].key,
        color: eyesColors[0]
    },
    skin: {
        element: skinShape[0].key,
        color: skinColors[0]
    },
    eyesbrows: {
        element: eyesBrown[0].key,
        color: hairColors[0]
    },
    beard: {
        element: beards[0].key,
        color: hairColors[0]
    }
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },
        setGender: (state, action: PayloadAction<GENDER>) => {
            state.gender = action.payload;
        },
        setAge: (state, action: PayloadAction<number>) => {
            state.age = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        setHair: (state, action: PayloadAction<ElementProps>) => {
            state.hair = action.payload;
        },
        setEyes: (state, action: PayloadAction<ElementProps>) => {
            state.eyes = action.payload;
        },
        setSkin: (state, action: PayloadAction<ElementProps>) => {
            state.skin = action.payload;
        },
        setEyesbrows: (state, action: PayloadAction<ElementProps>) => {
            state.eyesbrows = action.payload;
        },
        setBeard: (state, action: PayloadAction<ElementProps>) => {
            state.beard = action.payload;
        },
    }
});

export const {
    setFirstName,
    setLastName,
    setGender,
    setAge,
    setDescription,
    setHair,
    setEyes,
    setSkin,
    setEyesbrows,
    setBeard
} = characterSlice.actions;
export default characterSlice.reducer;