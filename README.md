# palavyr-chat-widget

[Demo Page](https://palavyr.github.io/palavyr-chat-widget/)

## Usage

    import Widget from 'palavyr-chat-widget';

    const App = () => {
        return <Widget src={"https://www.some-url.com/"} resizable />
    }

## Description

This project holds a pure react component with few dependencies that can be used to load things in a launchable chat window.

There are essentially two use cases:

1. Loading an iframe - whereby you will provide a valid and compatible url (.e.g https://www.google.com is not a valid url)
2. Loading custom content - whereby you will provide a react component, which will then be rendered in the container.

## Api

```

     -- Prop: Type = Default Value --

    // Function that is used to trigger the launcher toggle action
    customLauncher?: AnyFunction = undefined

    // Function that will fire when the launcher is clicked to toggle the widget
    onToggle?: AnyFunction = undefined

    // Label provided to the Launcher when it is open
    launcherOpenLabel?: string = ''

    // Label provided to the Launcher when it is closed
    launcherCloseLabel?: string = ''

    // image provided to the launcher when closed (shows up in the clickable launcher button)
    launcherCloseImg?: string = ''

    // image provided to launcher when open (shows up in the clickable launcher button)
    launcherOpenImg?: string = ''

    // when true, you can drag the left side of the widget
    resizable?: boolean == true

    // when true, and fixedPosition is False, the widget will start in the open state
    startOpen?: boolean = false

    // A Component that will be rendered instead of the iFrame. No styles are applied internally to the alternate component
    alternateContent?: AltContent = undefined

    // If true, the launcher will be visible and the widget will be fixed to the bottom left right corner (depending on the alignLeft value)
    fixedPosition?: boolean = true

    // prop used to control the state of the widget (open or closed state)
    open?: boolean = false

    // If true, the widget aligns to the left side of the screen instead of the right
    alignLeft?: boolean = false

    // Component rendered as the clickable button to open and close the widget when closed
    closeComponent?: React.ReactNode

    // Component rendered as the clickable button to open and close the widget when open
    launchComponent?: React.ReactNode

    // If true, the state of the container will be maintained (i.e. will not be unmounted) when the launcher is closed
    // e.g. this is useful if you'd like to persist the same conversation across different pages (and the widget sits outside of the router)
    persistState?: boolean;

```

## Package details

```
npm notice name:          palavyr-chat-widget
npm notice version:       0.2.13
npm notice filename:      palavyr-chat-widget-0.2.10.tgz
npm notice package size:  12.6 kB
npm notice unpacked size: 50.0 kB
npm notice shasum:        be7293ff7030be21bca4b00fab2bcb8e20b0257e
npm notice integrity:     sha512-jbxGTaodNguNS[...]xetm+7yagHU+w==
npm notice total files:   42
```