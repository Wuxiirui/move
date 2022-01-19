

//% weight=0 color=#0fbc11  icon="\uf207" block="move"
namespace move {
  

 /**
    *MOVE: full speed move forward
    */
    //% weight=9
    //% blockId=move_forward block="forword"
    export function forword():  {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P3, 512)
    pins.analogWritePin(AnalogPin.P4, 512) 
}
  
}
