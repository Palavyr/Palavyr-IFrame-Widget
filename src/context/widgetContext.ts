import React, { Dispatch, SetStateAction } from 'react';

export interface WidgetContextProps {
    widgetOpenState: boolean;
    visible?: boolean;
    toggleConversation(): void;
    setWidgetOpenState: Dispatch<SetStateAction<boolean>>;
    persistState?: boolean;
}

export const WidgetContext = React.createContext<WidgetContextProps>({} as WidgetContextProps);
