import React,{useState} from 'react'
import './App.css'
export default function App() {
  const [Name,setName] = useState('')
  const [Email,setEmail] = useState('')
  const [password, setPasword] = useState('')
  const [submitInfo, setInfo] = useState(false)
  function formsubmit(event){
    event.preventDefault()
    setInfo(true)
  }
  return (
    <div className='main-container' >{!submitInfo ?(
      <form onSubmit={formsubmit} className='form'>
        <label for="name" className='label'>Name</label><br/>
        <input type='text' id="name" placeholder='Enter your Name ...' onChange={(event)=>setName(event.target.value)} className='input'/><br/>
        <label for='email' className='label'>Email</label><br/>
        <input type='text' id='email' placeholder='Enter your Email...' onChange={(event)=>setEmail(event.target.value)} className='input'/><br/>
        <label for='password' className='label'>Password</label><br/>
        <input type='password' id='password' placeholder='Enter your password...' onChange={(event)=>setPassword(event.target.value)} className='input'/><br/>
        <button type='submit' className='button'>Submit</button>
      </form>):(<div><h1>ThanksYou</h1></div>)}
    </div>
  )
}
