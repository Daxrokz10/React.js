import react , {useState} from 'react'

function list() {

    let items = ["New York", "Delhi", "Bangalore", "Chennai", "Kolkata"];
    const [city,setCity] = useState(items[0])
    const handleCity = ()=>{
        setCity(items[Math.floor(Math.random()*items.length)])
    }
    return (
        <>
            <h1 >Hello React</h1>
            <h2>Hello {city}</h2>
            <button className='btn btn-primary' onClick={handleCity}>Change City</button>
        </>
    )
}

export default list