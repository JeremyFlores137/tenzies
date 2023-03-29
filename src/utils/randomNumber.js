import {nanoid} from "nanoid"

export default function random(){
    const num = Math.floor(Math.random()*6+1)
    return {
            value: num,
            isHeld: false,
            id: nanoid()
        }
}