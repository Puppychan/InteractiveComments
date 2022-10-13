# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Links

- Solution URL: [Github Link](https://github.com/Puppychan/InteractiveComments)
- Live Site URL: [Demo Link](https://matsuri-interactive-comments.netlify.app/)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot

<table >
  <tr>
      <td><p>
        <img width="1512" alt="image" src="https://user-images.githubusercontent.com/32950625/195004300-16c0843c-464d-4814-a566-21dfbd9acf96.png">
        <em>Desktop View</em>
      </p></td>
      <td><p>
        <img width="324" alt="image" src="https://user-images.githubusercontent.com/32950625/195004725-caf740c8-670f-46cc-8451-f65bfa55ddd1.png">
        <em>Mobile View</em>
      </p></td>
  </tr>
  <tr>
    <td><p>
      <img width="776" alt="image" src="https://user-images.githubusercontent.com/32950625/195004410-f3e98755-037b-40c9-b17e-9457942d25e6.png">
      <em>Desktop View Reply A Comment</em>
    </p></td>
      <td><p>
        <img width="322" alt="image" src="https://user-images.githubusercontent.com/32950625/195004789-89ecd9b2-c9a2-4490-92bd-d4d1a9094c88.png">    
        <em>Mobile View Reply A Comment</em>
  </p></td>
  </tr>
    <tr>
    <td><p>
      <img width="829" alt="image" src="https://user-images.githubusercontent.com/32950625/195004456-05ec7b20-2508-4e4b-9e27-d31c5b9fd1f7.png">
      <em>Desktop View Reply A Reply</em>
    </p></td>
      <td><p>
    <img width="321" alt="image" src="https://user-images.githubusercontent.com/32950625/195004878-1d8daa28-289c-4a32-b430-1afecacd1f07.png">
    <em>Mobile View Reply A Reply</em>
  </p></td>
  </tr>
    <tr>
    <td><p>
      <img width="739" alt="image" src="https://user-images.githubusercontent.com/32950625/195004499-0373cd07-8e10-4d59-b586-9bb62330c187.png">
      <em>Desktop View Edit A Comment</em>
    </p></td>
      <td><p>
    <img width="321" alt="image" src="https://user-images.githubusercontent.com/32950625/195004916-161811a2-d37b-4f98-97af-e5d13b408623.png">
    <em>Mobile View Edit A Comment</em>
  </p></td>
  </tr>
    <tr>
    <td><p>
      <img width="867" alt="image" src="https://user-images.githubusercontent.com/32950625/195004541-39539401-a52f-4b96-b698-1252dc183c13.png">
      <em>Desktop View Create New Comment</em>
    </p></td>
      <td><p>
    <img width="322" alt="image" src="https://user-images.githubusercontent.com/32950625/195004947-f385a649-7a44-49c9-8f94-907ea85d153a.png">
    <em>Mobile View Create New Comment</em>
  </p></td>
  </tr>
    <tr>
    <td><p>
      <img width="1506" alt="image" src="https://user-images.githubusercontent.com/32950625/195004586-c524d31d-415b-4f4c-a5aa-12d42f8339da.png">
      <em>Desktop View Delete Confirm Modal</em>
    </p></td>
      <td><p>
    <img width="324" alt="image" src="https://user-images.githubusercontent.com/32950625/195004985-885b7bc1-da78-4c98-b201-20db7642b309.png">
    <em>Mobile View Delete Confirm Modal</em>
  </p></td>
  </tr>
</table>



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [React Responsive](https://medium.com/@techrally/react-responsive-its-pretty-cool-d61e5ed56d95) - Mobile-first workflow - Responsive Design
- [Styled Components](https://styled-components.com/) - For styling
- [Vite Template](https://vitejs.dev/guide/) and Vite Plugin Svgr for displaying svg as react components
- [React UUID](https://www.npmjs.com/package/react-uuid) - Generate ID when creating new object
- [Moment](https://momentjs.com/) - Add timestamps as the published time to the comment card

### What I learned
#### :diamonds: Local Storage
- This is for storing the changes inside that web even when the user closes the web
- Create useState to store and assign items from local storage
- Add getter inside useEffect inside App.jsx
  - Call **<b style="color: Coral">localStorage.getItems('_<i style="color: SkyBlue">itemName</i>_')</b>** -> ***<b style="color: Coral">JSON.parse()</b>*** to convert string stored inside local storage to JSON object
  - Must check `null` condition when calling getter
  - If `null` - *nothing stored inside local storage*, call `local storage's setter` to set default value
  - Finally, call `useState's setter` to set the value called from local storage to the system's variable
- If the system's variable has any change -> useEffect to `set new change` to local storage
```js
  // inside App.jsx

import { useState, useEffect } from 'react'
import Comments from "./Components/Comments"
//...

function App() {
  // init system's variable
  const [comments, setComments] = useState([])
  //...

  useEffect(() => {
    // first load when run
    //...

    // load from local storage
    const localStoreItems = localStorage.getItem('comments')
    // Check if exist or null
    // if not null (.length because item get from local storage now is string)
    // if null, string: "[]"
    if (localStoreItems && localStoreItems.length != 2) {
      const items = JSON.parse(localStoreItems)
      // set system's variable
      setComments(items)
    }
    // if null
    else {
      // set back to local storage
      localStorage.setItem('comments', JSON.stringify(JsonData.comments))
      // alsp set system's variable
      setComments(JsonData.comments)
    }

    //...
    
  }, [])

  useEffect(() => {
    // update storage when update comments
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments])

  return (
    //...
  )
}

export default App

```
- Besides, if first useEffect is loading twice (one for having data array, one for null array) -> remove `<React.StrictMode></React.StrictMode>` inside main.jsx.

#### :diamonds:	 Dynamic Timestamps
- Install and import the package
  ```console
  npm install moment --save
  ```
  Inside Moment-using files
  ```js
  import moment from "moment"
  ```
- Add formatted timestamps: **<span style="color: Orange">moment().format()</span>** - String => output:  <em style="color: Salmon">2022-10-12T23:46:32+07:00</em>
- Display relative time
  - Create useState variable
  - Set default value is relative time: **<span style="color: Orange">moment(_<i style="color: DarkSeaGreen">timestamps</i>_).fromNow()</span>**
  - Update continuously:
    - use setInterval inside useEffect, after 1min (60000) -> update relative duration once
    ```js
    // const inside object
    const timestamps = moment.format()
    // inside component file jsx
    const [duration, setDuration] = useState(moment(timestamps).fromNow())
    //...
    useEffect(() => {
      setInterval(() => {
        setDuration(moment(timestamps).fromNow())
      }, 60000);
    }, [])
    ```

#### :diamonds: Dynamic Svg as React Component
- This function can help the coder to style the SVG dynamically and conditionally without importing new image
- Because this project uses Vite -> install
  ```console
  npm i vite-plugin-svgr
  ```
- Inside vite.config.js, add plugins[..., svgr()]
  ```js
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import svgr from 'vite-plugin-svgr'; // this line

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [ react(), svgr()] // this line
  })
  ```
- To use: `import {ReactComponent as SvgName} from "./assets/svg/logo.svg`
- To style the svg:
  - First method: **<span style="color: pink">using _as_ props from styled component</span>**
    ```js
    import styled from "styled-components";
    export const Icon = styled.svg`
        width: 10em;
        height: 10em;

        &:hover {
            & path {
                fill: pink;
            }
        }
    `
    // inside main.jsx
    import {ReactComponent as MinusIcon} from "./assets/minus.svg"
    //...
      <Icon as={MinusIcon}>
    //...
    ```
  -----
  - Second method
    ```js
    import styled from "styled-components";

    const SvgContainer = styled.div`
      svg {
        width: 10em;
        height: 10em;
        fill: blue;
        & path {
            display: flex;
            justify-content: center;
            align-items: center;
        }
      }
    `

    export default SvgContainer

    // Inside main.jsx
    import {ReactComponent as MinusIcon} from "./assets/minus.svg"
    //...
      <SvgContainer>
        <MinusIcon />
      </SvgContainer>
    //...
    ```
#### :diamonds: Dynamic Path for Img Tag
- When have too much images to import, and there is no need for styling these images dynamically
- Move all images inside folder assets to ***public folder***
  ```bash
  .
  |--main
  |   |-- public
  |   |   |-- svg
  |   |   |   |-- svgFile.svg
  ```
  The path would be: `/svg/svgFile.svg`
- The tag: `<img src='/svg/${svgNameDynamic}.svg'/>`

#### :diamonds: React Responsive
- For responsive faster
- Install
  ```console
  npm install react-responsive --save
  ```
- Create Breakpoint file
- Not really learn all

#### :diamonds: UUID Generator
- Install
  ```console
  npm i react-uuid
  ```
- uuid()

#### :diamonds: Add style for only Safari version
- Inside css style, add:
  ```js
      @media not all and (min-resolution:.001dpcm) {
        /* Safari only override */
        gap: ${props => props.screensize == "desktop" ? "5em" : "3em"};
        
    }
  ```
#### :diamonds: Deploy Netlify
- Install `npm install -g netlify-cli`
- If having deprecated message, update: `npm update netlify-cli`
- Build the vite project: `npm update netlify-cli`
  - If cannot build, run `npm init` first
- Run the deploy `ntl init`
  - Enter site name
  - Link repo through github
  - Finally, run `ntl deploy --prod` to deploy link
- Afterwards, if any change, only commit  push to github -> the deployed web will be automatically updated


### Getting Started
#### Prerequisites
- Install NodeJs first inside Node's website
- Npm package
  ```console
  npm install npm@latest -g
  ```

#### Installation
- Install following packages
```console
npm install moment --save
npm i react-uuid

npm install -g netlify-cli
npm update netlify-cli

npm install --save styled-components
npm i styled-components

npm i vite-plugin-svgr

npm install react-responsive --save
```
### Continued development

For further development, I will add login and register as well as being able to update avatars

### Useful resources

- [Local Storage Tutorial](https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/) - Amazing article for showing how to use local storage
- [Timestamp Resources - Moment JS](https://momentjs.com/) - This is helpful for formatting time and updating relative time continuosly
- [SVG as Component](https://www.freecodecamp.org/news/how-to-import-svgs-in-react-and-vite/) - This helps me know how to style custom svg when hover, when disabling the elements without import new images

## Author

- Website - [Nhung Tran Github](https://github.com/Puppychan/)
- Frontend Mentor - [@Puppychan](https://www.frontendmentor.io/profile/Puppychan)
- Linkedin - [Nhung Tran](https://www.linkedin.com/in/nhung-tran-528396210/)

## Acknowledgments

Thanks stackoverflow
