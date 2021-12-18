# palavyr-chat-widget

[Demo Page](https://palavyr.github.io/palavyr-chat-widget/)

## Usage

    import { Widget } from 'palavyr-chat-widget';
    import 'palavyr-chat-widget/dist/styles.css';

    const App = () => {
        return <Widget src={"https://www.some-url.com/"} resizable />
    }

## Description

This project holds a pure react component with few dependencies that can be used to load things in a launchable chat window.

There are essentially two use cases:

1. Loading an iframe - whereby you will provide a valid and compatible url (.e.g https://www.google.com is not a valid url)
2. Loading custom content - whereby you will provide a react component, which will then be rendered in the container.

## Package details

```
npm notice name:          palavyr-chat-widget
npm notice version:       0.2.10
npm notice filename:      palavyr-chat-widget-0.2.10.tgz
npm notice package size:  12.6 kB
npm notice unpacked size: 50.0 kB
npm notice shasum:        be7293ff7030be21bca4b00fab2bcb8e20b0257e
npm notice integrity:     sha512-jbxGTaodNguNS[...]xetm+7yagHU+w==
npm notice total files:   42
```