import { useState } from 'react'
import './App.css'
import DispalyTable from './components/DispalyTable'

function App() {
  const [data, setData] = useState({})
  const [userName, setUserName] = useState('')
  const [reposetiery, setReposetiery] = useState([])

  const onChangeHandler = (e)=>{
    setUserName(e.target.value)
  }

  const onSubmit = async e =>{
    e.preventDefault();

    const response = await fetch(`https://api.github.com/users/${userName}`)
    const data = await response.json();
    console.log(data);

    const reposetoires = await fetch(data.repos_url)
    const sigleRespos  =await reposetoires.json()
    console.log(sigleRespos);

    if(data){
      setData(data)
      setReposetiery(sigleRespos)
    }

  }

  return (
    <>
      <div className='ui search'>
      <div className='ui icon input'>
      <input
        className='prompt'
        type='text' value={userName} 
        onChange={onChangeHandler} 
        placeholder="commant Your Name..."
        />
        <i className="search icon"></i>
      </div>

      <button onClick={onSubmit}
        className="ui facebook button" style={{margin:15}}>
        <i className="github icon"></i>
        Search
      </button>
      </div>
      <DispalyTable 
          key={data.id} 
          data={data} 
          reposetiery={reposetiery} 
      />
    </>
  )
}

export default App
