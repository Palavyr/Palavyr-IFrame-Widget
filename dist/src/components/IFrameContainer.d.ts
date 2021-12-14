import './IFrameContainer-style.scss';
import { OptionalSrcProps } from './IFrameWindow';
import { AltContent } from 'src/utils/types';
export interface ConversationProps extends OptionalSrcProps {
    widgetOpenState: boolean;
    className: string;
    resizable?: boolean;
    src?: string;
    alternateContent?: AltContent;
}
export declare const IFrameContainer: ({ className, src, alternateContent, resizable, widgetOpenState, ...iframeProps }: ConversationProps) => JSX.Element;
