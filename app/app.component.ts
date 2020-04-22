import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  




  password = ""
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  Length = 0



  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }


  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }


  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }


  onChangeLength(value: string) {
    const parsedValue = parseInt(value)

    if (!isNaN(parsedValue)) {
      this.Length = parsedValue
    }
  };




  onButtonClick() {
    const numbers = "1234567890"
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const symbols = "!@#$%^&*()"
    let validChar = ''
    if (this.includeLetters) {
      validChar += letters;
    } if (this.includeNumbers) {
      validChar += numbers;
    } if (this.includeSymbols) {
      validChar += symbols;
    }

    let NewPassword = ""
    for (let i = 0; i < this.Length; i++) {
      const index = Math.floor(Math.random() * validChar.length)
      NewPassword += validChar[index]
    }
    this.password = NewPassword
  }






}
