import React from 'react'
function Die(props) {

    const styles = {
        color: props.isHeld ? "#d62828" : "",
        pointerEvents: !props.start ? "none" : ""
    }

  return (
    <div style={styles} onClick= {props.holdDice}>
        {props.children}
    </div>
  )
}

export default Die
