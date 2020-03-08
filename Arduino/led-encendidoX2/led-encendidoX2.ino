int led = 13;
int esperar = 500;

void setup() {
  // put your setup code here, to run once:
  
    pinMode(led, OUTPUT);

}

void loop() {
  // put your main code here, to run repeatedly:

  digitalWrite(led, HIGH);
  delay(esperar * 2);

  digitalWrite(led, LOW);
  delay(esperar);

}
