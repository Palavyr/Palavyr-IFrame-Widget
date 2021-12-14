import React from 'react';
export interface WidgetContextProps {
    widgetOpenState: boolean;
    visible?: boolean;
    toggleConversation(): void;
}
export declare const WidgetContext: React.Context<WidgetContextProps>;
