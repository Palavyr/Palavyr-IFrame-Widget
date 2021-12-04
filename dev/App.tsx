import { Component } from 'react';

import { Widget } from '../palavyr-chat-widget';

export default class App extends Component {
    componentDidMount() {}

    render() {
        return (
            <Widget
                src={'https://staging.widget.palavyr.com/widget?key=cbb41bf2-a8ee-4e77-b0f8-2e493e5ab6a4'}
                imagePreview
                resizable
            />
        );
    }
}
