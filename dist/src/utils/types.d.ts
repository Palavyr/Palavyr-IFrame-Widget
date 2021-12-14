/// <reference types="react" />
export declare type Nullable<T> = T | null;
export declare type AnyFunction = (...args: any[]) => any;
export interface ImageState {
    src: string;
    alt?: string;
    width: number;
    height: number;
}
export interface FullscreenPreviewState extends ImageState {
    visible?: boolean;
}
export declare type AltContent = React.ReactNode | string | number | boolean;
