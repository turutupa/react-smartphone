# react-smartphone

![Demo](https://github.com/Turutupa/react-smartphone/blob/main/demo.gif)

If you just want to see the showcase please jump to the [DEMO](https://turutupa.github.io/react-smartphone/)! 

## Sections
- About
- Install
- Examples
- Props

## About 
Smartphone container, acts as a regular container with relative positioning, with a fixed height and width. I used it in a personal project and thought I might as well publish it to share with the community :) 

Simply add to the container your React components and they will be rendered in the screen!

**Features**
- Adjustable colors
- Adjust width && height
- Scroll vertically like in a real smartphone
- Bind Volume && Home buttons to trigger your custom callback
- Toggle the phone lock button to activate lockscreen

Please add feedback if there is anything you might find missing.

## Install 

Run 

```
npm i react-smartphone
```

and import as usual

```
import SmartphoneContainer from 'react-smartphone'
```

## Examples

In the [DEMO](https://turutupa.github.io/react-smartphone/) I added the default react component that is generated whe you perform a *create-react-app app-name* to showcase the smartphone container. 

You can either place it entirely as follows with/without props (see props section)


```
import SmartphoneContainer from 'react-smartphone'

...

<SmartphoneContainer>
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
</SmartphoneContainer>
```

or in a cleaner way

```
import SmartphoneContainer from 'react-smartphone'

...

<SmartphoneContainer>
  <App />
</SmartphoneContainer>
```

If you want to customiz the phone you can specify props like color and dimensions. All styling props are strings. This gives you the flexibility to add for example height in vh or % or px etc... Same goes for colors, you can either use rgb or hex. Example:

```
  <SmartphoneContainer
    height='700px'
    width='380px'
    caseColor='rgb(30,30,30)'
    shadowColor='rgb(200,200,230)'
  >
    <!-- your component goes here -->
  </SmartphoneContainer>
```

## Props
**ALL** props are **OPTIONAL**. 

| Prop Name  | Default Value | Type |
| ------------- | ------------- |------------- |
| height  | 700px  | string |
| width  |  380px  | string |
| caseColor  | #f3f0dd  | string |
| detailsColor  | #374D5C  | string |
| cameraColor  | #f4745d  | string |
| shadowColor  | #b0b3b2  | string |
| volumeButtonsColor  | Content Cell  | string |
| text  |  Thanks for using react-phone. | string: if instead of a react component you just want to render a sentence you can pass a string and it will be rendered in the center of the phone screen | 
| screenColor  | 374D5C  | string | 
| children  | none  | React Component |
| content   | none  | React Component: if the are children, it will prioritize rendering children instead of content prop |
| volumeButtonEvent | none | callback function ()=> {}|
| homeButtonEvent | none | callback function ()=>{} |
    
Thanks and please do not forget to submit feedback if you something doesn't work properly or you simply want more fun features :)

<a href="https://www.buymeacoffee.com/turutupa" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-green.png" alt="Buy Me A Beer" height="41" width="174" style="border-radius: 10px;"></a>
