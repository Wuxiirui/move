{
  // Drive 100 ms forward
  bitbot.motor(BBMotor.All, 1023);
  basic.pause(100);

  // Drive 100 ms reverse
  bitbot.motor(BBMotor.All, -1023);
  basic.pause(100);

  // Drive 100 ms forward on left and reverse on right
  bitbot.motor(BBMotor.Left, 1023);
  bitbot.motor(BBMotor.Right, -1023);
  basic.pause(100);
}
