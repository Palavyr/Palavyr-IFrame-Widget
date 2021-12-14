import { ElementType } from 'react';

declare const Widget: ElementType;

export function toggleWidget(): void;
export function isWidgetOpened(): boolean;

export as namespace PalavyrChatWidget;
