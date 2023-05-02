---

title: '03_information_flow'

---

# React Information Flow

---

## ✅ Objectives 

- Define the term “lifting state”
- Recognize the pattern for changing state in a parent component from a child component
- Explain the role that callback functions play in changing parent state
- Recognize destructured props and how to work with them

---

## Before we get started
## Deliverable #1: Fetch 


---

##  🌈 Friendly Reminders ✨

#### 🚦 DO NOT PASS DOWN SETSTATE DIRECTLY 🛑
- always put setState in a callback function and pass down the callback function as props
```js
function updateState() => {
    setState("some value")
}
```
<br />

#### 🚦 DO NOT DIRECTLY MUTATE STATE ‼️
- always setState to a new value or use the callback function: `setState(prev => !prev)` 
- and don't do this: `stateVariable = newValue`
<br />

😌 Thank you 


---

## Lifting State Up ⬆️ 


"[In React](https://reactjs.org/docs/lifting-state-up.html), sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”."

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--KQmSLNKR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6ta8hhixxyo8jwhndq0z.jpeg" />

<aside class="notes">
- parent passes down data as props.  including callback functions for setState
<br />
- events will trigger the setState callback function which will update the uppermost parent
<br />
- parent rerenders causing children to re-render with updated parent state
</aside>

---

## Lifting State Up ⬆️ 
#### siblings cannot share data
- it is up to the parent to get information from child A and pass it down to child B

---


## Steps

1. add data to state in parent
2. add callback to update state in parent
<br />

3. pass data to child one
4. pass callback function to child two
<br />

5. create event listener in child two that invokes callback function
    - as a result state changes in the parent
    - and the state parent passes down to child one (as props) changes

---

## Diagram 

<img src="https://res.cloudinary.com/dnocv6uwb/image/upload/v1645814361/react-inverse-data-flow-diagram_zpunjn.png" alt="Information flow diagram" height="500" width="700">

---

## Demo: Inverse data flow in DrawIO
## And Deliverable #2: Dark Mode with Inverse Flow

---

## (You Do?) Deliverable #3: Phase Filter

---

## Update Our React Tree

---

## 💡 Conclusion: 

Lifting state up allows us to share data across different components without having to redefine that state where it is needed. The lowest common parent component is the best place to create the state and the process of sharing the data is done through the passing of props.

Because this data is now created elsewhere, we also have to be mindful of how the state is managed. Best practice is to always maintain and manage state where it has been defined. In order to do so successfully if behavior lives in a child component but state belongs to a parent component, is through inverse data flow. 

This means creating a callback function in the parent component that will be responsible for updating the state and passing it down as a prop to the child component with the behavior.

