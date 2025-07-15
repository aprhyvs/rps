## A JavaScript project built to test and reinforce:
1. DOM Manipulation
2. State Management
3. Git Branching
## Some interesting stuff I learned along the way:
### 1. alert() blocks DOM updates
DOM changes don’t render immediately if alert() is called right after. The alert blocks rendering, so the DOM appears "out of sync" (e.g., UI still shows a score of 4, but the alert sees the score as 5).
### 2. Event Delegation 
Instead of adding separate listeners to each button, you can add one to a parent element and use event.target to figure out what was clicked. 
### 3. Global vs. function scope interaction with querySelector and addEventListener
An element may not exist in the DOM yet when you try to add an event listener, making querySelector return null. Using console.log() to confirm the element exists before attaching anything is a good habit.