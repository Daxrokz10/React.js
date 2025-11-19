import react, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import List from './components/List'
import Demo from './components/Demo'
function App() {
  const [showComp, setShowComp] = useState(false);
  const [logs, setLogs] = useState([]);
  
  const toggleComp = () => {
    if (showComp) {
      setShowComp(false);
    } else {
      setShowComp(true);
    }
  }
  
  useEffect(() => {
    let message = "";
    if (!showComp) {
      message = "unmounted"
      console.log(message)
    }
    else {
      message = "mounted";
      console.log(message);
    }tLogs(prev => [...prev, message])
    se;
  }, [showComp])
  return (<>
    <header><Navbar></Navbar></header>
    <main className='container mt-4'>
      <div className="mx-auto col-6">
        <List></List>
      </div>
      {showComp ? <Demo></Demo> : null}
      <button onClick={toggleComp}>Toggle Component</button>
      <div>{logs.map((log) =><p>{log}</p>)}</div>
    </main>
  </>
  )
}

export default App
