// Type definitions for react-chat-widget v3.0.0
// Project: <https://github.com/Wolox/react-chat-widget>
// Definitions by: Martín Callegari <https://github.com/mcallegari10>

import { ElementType } from 'react';

declare const Widget: ElementType;

export function toggleWidget(): void;
export function isWidgetOpened(): boolean;

export as namespace ReactChatWidget;
