import React from 'react'
import Die from './components/Die'
import Hero from './components/Hero'
import diceGenerator from './utils/diceGenerator'
import Timer from './components/Timer'
import {useState, useEffect} from 'react'
import {nanoid} from "nanoid"
import {BsDice1Fill, 
  BsDice2Fill, 
  BsDice3Fill, 
  BsDice4Fill, 
  BsDice5Fill, 
  BsDice6Fill} from 'react-icons/bs'
import {MdSportsScore} from 'react-icons/md'  
function App() {

  const [dice, setDice] = useState(diceGenerator())
  const [isFinished, setIsFinished] = useState(false)
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)

  useEffect(()=>{
    if(!isFinished && start){
      setTimeout(()=>{
        setTime(prevState => prevState+1)
      }
      ,1000)
    }
  },[time, start])

  function holdDice(id){
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
          {...die, isHeld: !die.isHeld} :
          die
  }))
  }
  function render(listOfDice){
    const renderDice= []
    listOfDice.forEach( (die) =>{

        switch(die.value){
            case 1: renderDice.push(
            <Die 
              key={die.id}
              holdDice={()=>holdDice(die.id)}
              isHeld={die.isHeld}
              start={start}
            >
                <BsDice1Fill size ="40px" className="die"/>
            </Die>); break;
            case 2: renderDice.push(
            <Die 
              key={die.id}
              holdDice={()=>holdDice(die.id)}
              isHeld={die.isHeld}
              start={start}
            >
                <BsDice2Fill size ="40px" className="die"/>
            </Die>); break;
            case 3: renderDice.push(
            <Die 
              key={die.id}
              holdDice={()=>holdDice(die.id)}
              isHeld={die.isHeld}
              start={start}
            >
                <BsDice3Fill size ="40px" className="die"/>
            </Die>); break;
            case 4: renderDice.push(
            <Die 
              key={die.id}
              holdDice={()=>holdDice(die.id)}
              isHeld={die.isHeld}
              start={start}
            >
                <BsDice4Fill size ="40px" className="die"/>
            </Die>); break;
            case 5: renderDice.push(
            <Die 
              key={die.id}
              holdDice={()=>holdDice(die.id)}
              isHeld={die.isHeld}
              start={start}
            >
                <BsDice5Fill size ="40px" className="die"/>
            </Die>); break;
            case 6: renderDice.push(
            <Die 
              key={die.id}
              holdDice={()=>holdDice(die.id)}
              isHeld={die.isHeld}
              start={start}
            >
                <BsDice6Fill size ="40px" className="die"/>
            </Die>); break;
            default:  break;
        }
    })
    return renderDice
}

function rollDice() {
  setStart(true)
  if(!isFinished) {
      setDice(oldDice => oldDice.map(die => {
          return die.isHeld ? 
              die : {value: Math.ceil(Math.random() * 6), isHeld: false,id: nanoid()}
      }))
  } else {
      setIsFinished(false)
      setTime(0)
      setDice(diceGenerator())
  }
}
useEffect(() => {
  const allHeld = dice.every(die => die.isHeld)
  const firstValue = dice[0].value
  const allSameValue = dice.every(die => die.value === firstValue)
  if (allHeld && allSameValue) {
      setIsFinished(true)
      const scores= JSON.parse(localStorage.getItem("time")) || []
      scores.push(time)
      localStorage.setItem("time",JSON.stringify(scores))
  }
}, [dice])
  return (
    <div className='tenzies-container'>
        <main>
          <Timer time={time}/>
          <Hero />
          <div className="dice-container">
            <div className="dice" style={{pointerEvents: isFinished ? "none": ""}}>
              {render(dice)}
            </div>
          </div>
          <button onClick={rollDice} className="roll-btn">{start ?  (isFinished ? "Play again":"Roll"): "Start"}</button>
          <div className="score-box">
            <p>Scores:</p>
            {JSON.parse(localStorage.getItem("time")) && JSON.parse(localStorage.getItem("time")).map(ele => {return <li key={nanoid()}> <MdSportsScore/> {ele} points</li>})} 
          </div>
        </main>
    </div>
  )
}

export default App
