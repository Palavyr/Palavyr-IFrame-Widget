# Palavyr-IFrame-Widget
Palavyr-chat-Widget

## Usage

    import { Widget } from 'palavyr-chat-widget';
    import 'palavyr-chat-widget/dist/styles.css';

    const App = () => {
        return <Widget src={"https://www.some-url.com/"} resizable />
    }

## Description

This is project has it's origins in the <a href="https://github.com/Wolox/react-chat-widget">Wolox 'react-chat-widget'</a>. Their modern widget has two main parts:

1. The message handling logic
2. The container that renders the message handling logic

I have found each of these - individually - pieces of valuable prior art that these folks were nice enough to open source. I had a use case for the container, but the requirement excluded a need for the message handling logic. The container worked really nicely, so I've taken it and gutted out the message handling logic. Instead, the container renders an `iframe`, where the source is passed in through props. I have also made modifications on this code, and it continues to be open source. Many thanks to the Wolox team. I didn't feel this would be an appropriate extension to the parent project since it involves a great deal of code deletion, code modification, and file reorganization.

The package is primarily intended to be used as the widget container for the <a href="https://www.palavyr.com">Palavry chat bot service</a>.