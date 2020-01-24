# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

- React is a Javascript library for building user interfaces. With React, you work with something called the virtual DOM, which interacts with the actual DOM for you. A developer tells the virtual DOM which elements and state to render to the actual DOM, and it will so do. It then reacts when the state (data) in our app changes, and will update the actual DOM accordingly. These changes made to the actual DOM are the minimum number of changes necessary to achieve the new state, which takes pressure off our browsers and is why React is so powerful.

2. What does it mean to think in react?

- Thinking about applications as you build them, in building explicit and easy to read components that are reusable and modular.

3. Describe state.

- State is data, and the condition of the data at a particular time. (ex- a Boolean has a state being on or off)

4. Describe props.

- Props (properties) are information held on state that are passed inside one component to another. Props are read-only data, which helps ensure data flow remains clean and organized.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

- Side effects are anything that affect something outside the scope of the function being executed (ex- fetching data from an API). The effect hook tells React that a component needs to execute some side effect. It takes 2 parameters, one being a callback function where we can run the side effect, the other being if we want to have the side effect run when tracking changes in a specific thing (state). 
