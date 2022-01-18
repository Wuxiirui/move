namespace play {

 /**
      * Move robot forward (or backward) at speed.
      * @param direction Move Forward or Reverse
      * @param speed speed of motor between 0 and 100. eg: 60
      */
    //% blockId="BBGo" block="go%direction|at speed%speed|\\%"
    //% speed.min=0 speed.max=100
    //% weight=100
    //% subcategory=Motors
    export function go(direction: BBDirection, speed: number): void
    {
        move(BBMotor.Both, direction, speed);
    }

/**
      * Stop robot by coasting slowly to a halt or braking
      * @param mode Brakes on or off
      */
    //% blockId="BBstop" block="stop with%mode"
    //% weight=60
    //% subcategory=Motors
    export function stop(mode: BBStopMode): void
    {
        getModel();
        let stopMode = 0;
        if (mode == BBStopMode.Brake)
            stopMode = 1;
        pins.digitalWritePin(lMotorD0, stopMode);
        pins.digitalWritePin(lMotorD1, stopMode);
        pins.digitalWritePin(rMotorD0, stopMode);
        pins.digitalWritePin(rMotorD1, stopMode);
    }

    function createCalib(speed: number): void
    {
        if (getVersionCode() == 5)
        {        
            let calibVal = 0;
            if (speed < 60)
                calibVal = calibration[1] - ((60 - speed)/30) * (calibration[1] - calibration[0]);
            else
                calibVal = calibration[2] - ((90 - speed)/30) * (calibration[2] - calibration[1]);
            leftCalib = 0;
            rightCalib = 0;
            if (calibVal < 0)
                leftCalib = Math.abs(calibVal);
            else
                rightCalib = calibVal;
        }
    }

}
