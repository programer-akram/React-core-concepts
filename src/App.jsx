
import './App.css'
import Countries from './Components/Countries/Countries'
import Posts from './posts'

function App() {
  

  return (
    <>
      
      <h1>React core concepts</h1>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event handler</li>
        <li>State</li>
        <li>load data</li>
      </ol>
      <hr />
        
        {/* <Posts></Posts> */}
        <Countries></Countries>

    </>
  )
}

export default App
