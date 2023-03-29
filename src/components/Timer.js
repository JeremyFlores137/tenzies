function Timer(props) {
  return (
    <div className="timer-container">
        <img 
            src="https://media.giphy.com/media/cDKJ1j9Nqdfl3i8AIb/giphy.gif" 
            className="clock"
            alt= "a clock"
        />
        <p>Counter: <span className="time">{props.time} sec</span></p>
    </div>
  )
}

export default Timer
