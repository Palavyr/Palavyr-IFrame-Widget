import { ElementType } from 'react';

export interface BehaviorState {
    showChat: boolean;
    disabledInput: boolean;
    messageLoader: boolean;
}

export interface ImageState {
    src: string;
    alt?: string;
    width: number;
    height: number;
}

export interface FullscreenPreviewState extends ImageState {
    visible?: boolean;
}

export interface GlobalState {
    behavior: BehaviorState;
    preview: FullscreenPreviewState;
}
