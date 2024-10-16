# Brain Train Game

For 

## Table of Contents

1. [Planning & Development](#planning--development)
2. [Features](#features)
3. [Testing](#testing)
4. [Deployment](#deployment)
5. [Languages](#languages)
6. [Media Queries](#media-queries)
7. [Software](#software)
8. [Code](#code)
9. [Credits](#credits)

## Bugs found and fixed during coding

1. could not seem to create a gap between two borders when using bootsrtap due to the gutter in between. I eventually solved this by adding an extra div inside the columns which allowed me to add padding to the borders and create two seperate boxes.

![Gutter Bug](assets/images/gutter-bug.png)

2. Was having an issue where the bottom border of the two divs would never line up no matter how much space was used in each div. Solved this by making the child fill 100% of the parent container.

```CSS
.how-to-text, .challenge-text  {
    color: #fafafa;
    text-align: center;
    padding: 50px 100px;
    font-size: 110%;
    font-family: "Poppins", sans-serif;
    border: 3px solid #fafafa;
    border-radius: 10px;
    height: 100%;
}
```

Before:

![Bottom border bug](assets/images/bottom-border-bug-before.png)

After:

![Bottom border bug](assets/images/bottom-border-bug-after.png)

4. Was having an issue trying to transition betwene two images when hovering over it on the main page to instruct the player. With CSS i would have had to using background images to solve sthis issue so instead I decided to use javascript on the images to make them change on hover or stay flipped over.

```js
onmouseover="this.src='assets/images/eye.png';" onmouseout="this.src='assets/images/card-back.png';"
```

5. I was finding it diffult to find a way to count the number of succesful matches to add a popup message to say when the player had succesfully completed the match. I added this code to start with but found it was just counting second cards not successful matches:

```js
matches += 1;
            if (matches === cardList.length) {
                alert("You win!");
            }
```

After some research I found that the best way was to create a variable from scratch and create an 'else' for my update function which would then count the successful matches. When the succsessful matches  matches the card length string it would result in a win message using the following code:

```js
else {
        matches += 1;
        card1Selected = null;
        card2Selected = null;
        if (matches === cardList.length) {
            setTimeout(() => {
                alert("Congratulations! You've matched all the cards!")
            }, 500);
        }
       
    }
```

