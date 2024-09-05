mnmimport { useState } from 'react'
import './App.css'

function App() {
const  [active, setActive] = useState(0)
console.log(active)
  return (
    <div className="container">
      <div className="question-div">
        <p className='question' onClick={()=>{
          if(active === 1){
            setActive(0)
          }else{
            setActive(1)
          }
          
        }} >question1</p>
        {active === 1 ?  <p>answer1</p> : null }

      </div>
      <div className="question-div">
        <p  className='question'  onClick={()=>{
          if(active === 2){
            setActive(0)
          }else{
            setActive(2)
          }
          
        }}>question2</p>
         {active === 2 ?  <p>answer2</p> : null }
       
      </div>
      <div className="question-div">
        <p  className='question'  onClick={()=>{
           if(active === 3){
            setActive(0)
          }else{
            setActive(3)
          }
          
        }}>question3</p>
         {active === 3 ?  <p>answer3</p> : null }
       
      </div>
      <div className="question-div">
        <p  className='question'  onClick={()=>{
          if(active === 4){
            setActive(0)
          }else{
            setActive(4)
          }
          
        }}>question4</p>
         {active === 4 ?  <p>answer4</p> : null }
       
       
      </div>
      <div className="question-div">
        <p  className='question'  onClick={()=>{
          if(active === 5){
            setActive(0)
          }else{
            setActive(5)
          }
          
        }}>question5</p>
         {active === 5 ?  <p>answer5</p> : null }
       
      </div>
    </div>
  )
}

export default App
