# Answer of the question written below:-

## Answer of question-1.
(a). getElementById("idName") Select a single element with a specific ID(id).
(b). getElementsByClassNames("className")selects multiple elements with a class(return HTMLCollection).
(c). querySelector("selector") works like a CSS selector and return the first matching element.
(d). querySelectorAll("selector")works like a CSS selector and return the first matching elements as a NodeList.


## Answer of question-2.
(a). To create a new element:
let newDiv = document.createElement("div");
(b). To add content Inside:
newDiv.innerText = "hello sir";
(c).To add to the DOM:
document.append(newDiv);


## Answer of question-3.
When an event happens a child element, the same event also goes up to its parent, then grandparent, and finally the document.
Example:
Clicking a button inside a div first the button gets the event, then the div, then the body, then the document.


## Answer of question-4.
Event Delegation means adding one event listener to a parent element, instead of adding to many child elements.
it's Useful. Because
(a). Less code(don't need many listener).
(b). Faster performance.
(c). Works even for new Child elements added later.



## Answer of question-5.
(a). preventDefault(): Stops the browser's default action.
(b). stopPropagation(): Stop the Event from going up to parent elements (stop bubbling)