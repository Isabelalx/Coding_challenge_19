import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Gallery from './components/Gallery';
import './components/styles/styles.css';
import './App.css'

// Child component to demonstrate props usage
function Counter({ count, increment }) {
  return (
    <div className="card">
      <button onClick={increment}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  )
}

function App() {
  // State object to manage multiple pieces of state
  const [state, setState] = useState({
    count: 0,
    message: "Welcome to Coding Challenge 19"
  })

  // Function to increment the count
  const incrementCount = () => {
    setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1
    }))
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{state.message}</h1>
      {/* Pass state and function as props to the child component */}
      <Counter count={state.count} increment={incrementCount} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
