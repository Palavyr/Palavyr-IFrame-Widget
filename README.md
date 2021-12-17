# palavyr-chat-widget

## Usage

    import { Widget } from 'palavyr-chat-widget';
    import 'palavyr-chat-widget/dist/styles.css';

    const App = () => {
        return <Widget src={"https://www.some-url.com/"} resizable />
    }

## Description

This project produces a purely react component used for loading things as a chat widget.

There are essentially two use cases:

1. Loading an iframe - whereby you will provide a valid and compatible url (.e.g https://www.google.com is not a valid url)
2. Loading custom content - whereby you will provide a react component, which will then be rendered in the container.

The widget
