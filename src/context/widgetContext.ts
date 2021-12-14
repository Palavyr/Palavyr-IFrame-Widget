import React from 'react';

export interface WidgetContextProps {
    widgetOpenState: boolean;
    visible?: boolean;
    toggleConversation(): void;
}

export const WidgetContext = React.createContext<WidgetContextProps>({} as WidgetContextProps);
