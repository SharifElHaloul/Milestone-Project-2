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