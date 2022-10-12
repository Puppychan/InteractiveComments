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
#### Local Storage
- Create useState to store and assign items from local storage
- Add getter inside useEffect inside App.jsx
  - Call <b style="color: Coral">localStorage.getItems('<i>itemName</i>')</b> -> <b style="color: Coral">JSON.parse()</b> to convert string stored inside local storage to JSON object
  - Must check <span style='color: orange'>null</span> condition when calling getter
  - If null - nothing stored inside local storage, call local storage's setter to set default value
  - Finally, call useState's setter to set the value called from local storage to the system's variable
- If the system's variable has any change -> useEffect to set new change to local storage
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
- Besides, if first useEffect is loading twice (one for having data array, one for null array) -> remove <b style="color: MediumTurquoise"><React.StrictMode></React.StrictMode></b> inside main.jsx

#### Dynamic Timestamps
#### Dynamic Svg as React Component
#### Dynamic Path for Img Tag
#### Add style for only Safari version
#### Deploy Netlify

### Getting Started
#### Prerequisites
#### Installation
### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Nhung Tran Github](https://github.com/Puppychan/)
- Frontend Mentor - [@Puppychan](https://www.frontendmentor.io/profile/Puppychan)
- Linkedin - [Nhung Tran](https://www.linkedin.com/in/nhung-tran-528396210/)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
  //https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar
// https://stackoverflow.com/questions/11448340/how-to-get-duration-in-weeks-with-moment-js
