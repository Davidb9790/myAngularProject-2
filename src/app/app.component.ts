import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component'; //add IMPORT HERE to display
import { FormsModule } from '@angular/forms';
import { style } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, TestComponent, FormsModule],
})
export class AppComponent {
  title = 'myAngularProject-2';
  msg = 'Hello, Welcome to this page';
  a = 10;
  b = 5;
  ans = this.a + this.b;

  //interpolation
  inputVal = 'Hello';
  isDisabled = false;

  // <!-- 9. Assignment Property binding with image tag -->
  imgSrc = '/assets/Angular.jpg';

  // 10. Event biding with a Click Event
  display(msg: string) {
    alert(msg);
  }
  //11. Event Binding with Click Event
  dblClick = 0;
  incrementOnDoubleClick() {
    this.dblClick++;
  }

  onOver = 0;
  incrementOnOver() {
    this.onOver++;
  }

  onLeave = 0;
  incrementOnLeave() {
    this.onLeave++;
  }

  onDrag = 0;
  incrementOnDrag() {
    this.onDrag++;
  }

  onDragOver = 0;
  incrementOnDragOver() {
    this.onDragOver++;
  }

  //12. Binding Keyboard Events
  onKeyPress() {
    console.log('key pressed');
  }
  onKeyDown() {
    console.log('key down event is triggered');
  }
  //13. $event object
  eventObject(eventParameter: any) {
    console.log(eventParameter);
    console.log(eventParameter.key);
    //parameter is $event
  }
  //14. Assignment (checking shift key status)
  isShift(event: any) {
    if (event.shiftKey && event.key === 'Y') {
      console.log('Shift + Y is pressed');
    }
    console.log(event.key);
  }
  //15. Two Way Binding ngModel
  staticInput: string = 'Static two-way binding';
  dynamicInput: string = '';

  //16. Two Way Binding ngModel
  inputValForButton: string = '';
  dynamicVal: string = '';
  show() {
    this.dynamicVal = this.inputValForButton;
  }
  buttonText: string = '';

  //17. Assignment Creating counter example
  count = 0;
  counter(type: string) {
    type === 'incr' ? this.count++ : this.count--;
    // if(type === 'incr'){
    //   this.count++;
    // }else if(type === 'decr'){
    //   this.count--;
    // }
  }
  //20. Structural directives
  //*ngIf
  displayViaNgIf = true;
  num = 5;
  //21. Assignment- Implement show & hide functionality for *ngIf
  displayElement: boolean = false; //set to false since buttons says "Show" nothing should be showing

  showElement() {
    this.displayElement = !this.displayElement;
    //if the displayElement is "true" make it "false"
    //if the displayElement is "false" make it "true"
  }
  //22. Structural Directives *ngFor
  fullStackDev = [
    {
      id: 1,
      name: 'Angular',
    },
    {
      id: 2,
      name: 'React',
    },
    {
      id: 3,
      name: 'Node.js',
    },
    {
      id: 4,
      name: 'MongoDB',
    },
  ];

  //23. Assignment- Displaying list items on button click using *ngIf & *ngFor
  showListItems: boolean = false;

  listItems = [
    {
      name: 'Julius',
      age: 50,
    },
    {
      name: 'Alex',
      age: 29,
    },
    {
      name: 'Jose',
      age: 35,
    },
    {
      name: 'Nira',
      age: 41,
    },
    {
      name: 'Lavan',
      age: 22,
    },
    {
      name: 'Donna',
      age: 26,
    },
  ];

  //24. Structural Directives *ngSwitch
  //Have to pass an expression in the ngSwitch
  age = 10;

  personObject = {
    age: 28,
  };

  //25. Implementing age validation functionality using *ngSwitch
  personsAge: number = 0;
  isEligible: boolean = false;

  checkEligibility() {
    this.isEligible = this.personsAge >= 18;
    console.log(this.isEligible);
  }

  //26 Attribute Directives [ngClass]
  updateStyles = 'updateStyles'; //Needs to be added as a variable with the same value to be passed along.
  hasText: boolean = false;

  textInput(e: any) {
    this.hasText = e.target.value !== '';
  }
  //27. Assignment ngClass
  colorMode = 'lightMode';
  toggleMode() {
    if (this.colorMode === 'lightMode') {
      this.colorMode = 'darkMode';
    } else {
      this.colorMode = 'lightMode';
    }
  }

  //28. Attributes Directives - [ngStyle]
  colorVal = 'navy';
  fontSize = '30px';
  isItalic = 'italic';

  applyVal = {
    color: 'darkgreen',
    'font-style': 'italic',
    'font-size': '35px',
    'font-weight': 'bold',
  };
  //29. Assignment Changing the color of input field using [ngStyle]
  inputName: string = '';
  inputEmail: string = '';
  emailIsValid: boolean = false;
  formSubmitted: boolean = false;

  checkEmailValidation(inputEmail: string): void {
    if (inputEmail.includes('@') && inputEmail.includes('.com')) {
      this.emailIsValid = true;
    } else {
      this.emailIsValid = false;
    }
  }

  showMessage() {
    if (this.inputName && this.emailIsValid) {
      this.formSubmitted = true;
    } else {
      this.formSubmitted = false;
    }
  }
  //30. Grouping elements with ng-container
  subjectList = [
    {
      subCode: 101,
      name: 'JavaScript',
    },
    {
      subCode: 102,
      name: 'C++',
    },
    {
      subCode: 103,
      name: 'Data Structures',
    },
  ];

  //31. HTML templates with ng-template
  isAuthorized: boolean = false;
  listItemsArray = ['Item A', 'Item B', 'Item C', 'Item D']; //if you remove items in array diff message displays

  //33.
  user: string = '';
  //
  //
  //.35 Rendering Templates with ngTemplateOutlet Part 2
  employees = [
    { id: 1, name: 'Jake', salary: '$45,000' },
    { id: 2, name: 'Danny', salary: '$50,000' },
    { id: 3, name: 'Harry', salary: '$55,000' },
  ];
}
