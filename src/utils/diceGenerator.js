import random from './randomNumber'
function diceGenerator() {
    const dices = []
    for(let i = 0; i<10; i++){
        dices.push(random())
    }
    return dices
}

export default diceGenerator
