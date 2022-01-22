import { Dispatch, SetStateAction } from 'react';

export type SomeType = {
    thing: string;
};

export type AnyFunction = (...args: any) => any;
export type AltContent = React.ReactNode | string | number | boolean;

export type SetState<T> = Dispatch<SetStateAction<T>>;
