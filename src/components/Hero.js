import React from 'react'
import Die from './Die'
import { GiDiceShield} from 'react-icons/gi'
function Hero() {
  
  return (
    <>
      <h1 className="title-header">Tenzies <GiDiceShield/> </h1>
      <p className="content-main">
        Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
      </p>
    </>
  )
}

export default Hero
