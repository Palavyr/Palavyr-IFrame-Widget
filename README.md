# palavyr-chat-widget

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

I have found each of these pieces - individually - quite valuable. The creators were also nice enough to open source their work. I had a use case for the container, but the requirement excluded a need for the message handling logic. The container worked really nicely, so I've taken it and gutted out the message handling logic. Instead, the container renders an `iframe`, where the source is passed in through props.

I have made modifications to this code, and it of course remails source. Many thanks to the Wolox team for their initial design and implementation.

I didn't feel this would be an appropriate extension to the parent project since it involves a great deal of code deletion, code modification, and file reorganization.

Furthermore, the package is primarily intended to be used as the widget container for the <a href="https://www.palavyr.com">Palavry chat bot service</a>. So if you're building a site and would like to integrate Palavyr, you can use this to launch the widget in your customer's website.

For more information about Palavyr, please visit us at www.palavyr.com


For those interested in a nice guide to publishing their component demo to github pages, check out [this blog](https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220)