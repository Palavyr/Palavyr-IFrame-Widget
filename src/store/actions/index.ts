import * as actionsTypes from './types';
import { ImageState } from '../types';

export function toggleChat(): actionsTypes.ToggleChat {
    return {
        type: actionsTypes.TOGGLE_CHAT,
    };
}

export function toggleMsgLoader(): actionsTypes.ToggleMsgLoader {
    return {
        type: actionsTypes.TOGGLE_MESSAGE_LOADER,
    };
}

export function hideAvatar(index: number): actionsTypes.HideAvatar {
    return {
        type: actionsTypes.HIDE_AVATAR,
        index,
    };
}

export function openFullscreenPreview(payload: ImageState): actionsTypes.FullscreenPreviewActions {
    return {
        type: actionsTypes.OPEN_FULLSCREEN_PREVIEW,
        payload,
    };
}

export function closeFullscreenPreview(): actionsTypes.FullscreenPreviewActions {
    return {
        type: actionsTypes.CLOSE_FULLSCREEN_PREVIEW,
    };
}
