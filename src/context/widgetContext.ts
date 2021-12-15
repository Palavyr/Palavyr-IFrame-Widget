import React from 'react';

export interface WidgetContextProps {
    widgetOpenState: boolean;
    visible?: boolean;
    toggleConversation(): void;
    persistState?: boolean;
}

export const WidgetContext = React.createContext<WidgetContextProps>({} as WidgetContextProps);
