// Definitions by: Martín Callegari <https://github.com/mcallegari10>
// Modified by Paul Gradie

import { ElementType } from 'react';

declare const Widget: ElementType;

export function toggleWidget(): void;
export function isWidgetOpened(): boolean;

export as namespace ReactChatWidget;
