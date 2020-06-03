import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
     output: number;
     firstNumber: number;
     secondNumber: number;
     operator = '+';
  constructor() { }
  onFirstChange(firstNumber){
    this.firstNumber = Number(firstNumber);
  }
  onSecondChange(secondNumber){
    this.secondNumber = Number (secondNumber);
  }
  onOperator(operator){
    this.operator = operator;
  }
  calculator(){
    switch (this.operator) {
      case '+' : this.output = this.firstNumber + this.secondNumber;
                 break;
      case '-' : this.output = this.firstNumber - this.secondNumber;
                 break;
      case '*' : this.output = this.firstNumber * this.secondNumber;
                 break;
      case '/' : this.output = this.firstNumber / this.secondNumber;
                 break;
    }
  }

  ngOnInit(): void {
  }

}
