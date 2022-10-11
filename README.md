# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

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

### Links

- Solution URL: [Github Link](https://github.com/Puppychan/InteractiveComments)
- Live Site URL: [Demo Link](https://matsuri-interactive-comments.netlify.app/)

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

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

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
