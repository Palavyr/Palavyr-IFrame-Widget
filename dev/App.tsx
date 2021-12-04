import { Component } from 'react';

import { Widget } from '../index';

export default class App extends Component {
    componentDidMount() {}

    render() {
        return (
            <Widget
                title="Bienvenido"
                subtitle="Asistente virtual"
                senderPlaceHolder="Escribe aquí ..."
                imagePreview
                emojis
                resizable
            />
        );
    }
}
