export enum GENDER {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}

export type Character = {
    firstName: string;
    lastName: string;
    gender: GENDER;
    age: number;
    description: string;
    hair: ElementProps;
    eyes: ElementProps;
    skin: ElementProps;
    eyesbrows: ElementProps;
    beard: ElementProps;
}

export type ElementProps = {
    element: string;
    color: string;
};

export type AssetProps = {
    name: string;
    key: string;
    gender?: GENDER;
    assets: string;
}