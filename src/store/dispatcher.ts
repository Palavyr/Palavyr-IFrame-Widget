import store from '.';
import * as actions from './actions';
import { ImageState } from './types';

export function toggleMsgLoader() {
    store.dispatch(actions.toggleMsgLoader());
}

export function toggleWidget() {
    store.dispatch(actions.toggleChat());
}

export function isWidgetOpened(): boolean {
    return store.getState().behavior.showChat;
}

export function openFullscreenPreview(payload: ImageState) {
    store.dispatch(actions.openFullscreenPreview(payload));
}

export function closeFullscreenPreview() {
    store.dispatch(actions.closeFullscreenPreview());
}
