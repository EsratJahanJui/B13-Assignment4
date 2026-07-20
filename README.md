# B13-Assignment4
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
answer : These are four DOM methods.
 getElementById : in html file find element by id .can select only one element in html file.

 getElementsByClassName: in html file find element by class name. because one class name can use in multiple html tag so can select multiple html tag.

 querySelector : in html file find first matching css selector. can select only first one element.

 querySelectorAll : in html file any css selector and all the element who has same class name can be select.

2. How do you create and insert a new element into the DOM?
answer : need to create a element in javascript.
example: const h1 = document.createElement("h1");
  then set content 
 example: h1.textContent = "This is a title"
 then need to insert the set content in dom 
 example : document.getElementById("container").appendChild(h1);
 this is how i can create & insert a new element in dom.
  there are many ways to create & insert element in to dom.        

3. What is Event Bubbling? And how does it work?
answer : Event bubbling is event propagation. when an event work on an element it first executes on the target element and then propagation upward through its parents elements until it reaches the document or can be stop using event.stopPropagation() . it can be useful when a single parents element handles events for many child elements.

4. What is Event Delegation in JavaScript? Why is it useful?
answer : Event delegation is a javascript technique where can attach a single event listener to a parent element instead of adding listeners each child. it work because event go upward to it's parents and can be identify clicked child using event target . it is useful because,
  it improve performance because it reduce number of event listener.
  can handle dynamically added elements.
  makes code cleaner.

5. What is the difference between preventDefault() and stopPropagation() methods?
answer : preventDefault() : prevent the browser's default behavior like following a link or submit a form. it does not stop the event from bubbling .
 stopPropagation() : prevents the event from propagating to parents elements. it does not prevent the browser's default behavior .