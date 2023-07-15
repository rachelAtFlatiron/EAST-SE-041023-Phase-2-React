# Information Flow

## SWBATs:

- [ ] Define the term “lifting state”
- [ ] Recognize the pattern for changing state in a parent component from a child component
- [ ] Explain the role that callback functions play in changing parent state
- [ ] Observe how we can render reusable components that invokes different callback functions after an event
- [ ] Recognize destructured props and how to work with them

---

## Lifting State Up ⬆️ 


"[In React](https://reactjs.org/docs/lifting-state-up.html), sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”."

<img src="https://learn.meritacademy.tech/assets/images/reactjs/01-data-flow-react.png">


---

## Diagram 

<img src="https://res.cloudinary.com/dnocv6uwb/image/upload/v1645814361/react-inverse-data-flow-diagram_zpunjn.png" alt="Information flow diagram" height="1000" width="2000">

---

## Demo

---

## 💡 Conclusion: 

Lifting state up allows us to share data across different components without having to redefine that state where it is needed. The lowest common parent component is the best place to create the state and the process of sharing the data is done through the passing of props.

Because this data is now created elsewhere, we also have to be mindful of how the state is managed. Best practice is to always maintain and manage state where it has been defined. In order to do so successfully if behavior lives in a child component but state belongs to a parent component, is through inverse data flow. 

This means creating a callback function in the parent component that will be responsible for updating the state and passing it down as a prop to the child component with the behavior.