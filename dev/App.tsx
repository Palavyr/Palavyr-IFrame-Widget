import { Widget } from '../src/index';

export const App = () => {
    const src = process.env.PALAVYR_TEST_API_KEY as string;
    console.log(src);

    return <Widget src={src} resizable />;
};
