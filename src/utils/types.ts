export type Nullable<T> = T | null;

export type AnyFunction = (...args: any[]) => any;

export interface ImageState {
    src: string;
    alt?: string;
    width: number;
    height: number;
}

export interface FullscreenPreviewState extends ImageState {
    visible?: boolean;
}

export type AltContent = React.ReactNode | string | number | boolean;
