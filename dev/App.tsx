import { Widget } from '../src/index';
const testSrc = 'https://staging.widget.palavyr.com/widget?key=cbb41bf2-a8ee-4e77-b0f8-2e493e5ab6a4';

export const App = () => <Widget src={testSrc} resizable />;
