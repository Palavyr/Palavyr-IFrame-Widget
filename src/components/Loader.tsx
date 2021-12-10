import cn from 'classnames';

import './Loader-styles.scss';

export interface LoaderProps {
    loading: boolean;
}

export const Loader = ({ loading }: LoaderProps) => {
    return (
        <div className={cn('loader', { loading })}>
            <div className="loader-container">
                <span className="loader-dots"></span>
                <span className="loader-dots"></span>
                <span className="loader-dots"></span>
            </div>
        </div>
    );
};
