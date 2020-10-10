// This file here is the JavaScript entry-point

// We need to import react into each javscript file
import React from 'react'

// Used for the render method which renders the component in the index.html
import ReactDOM from 'react-dom'

//Nested components
const Person = () => <h2>How are you</h2>

const Message = () => {
  return (
  <div>
    <h1>Hello there</h1>
  </div>
    );
}


// We also always need a function. 
// We always need to return something. // div / section /article / fragment: A single element must be returned
// The name must always start with a CAPITAL. Components start with Capitals.
// use camleCase for html attributes. ex className
// close every element
function Greeting() {
  return (
  <div className='greeting'>

  {/* If we are going to include a component, we can just call the function by its Name */}
    <Message/>
    <Person/>
  </div>
  );
}

// render take two arguments
// First: the component that you want to display to the user
// Second: the HTML target where you want javascript elements to be displayed. 
// ID root exists within the index.html file
ReactDOM.render(<Greeting/>, document.getElementById('root'));