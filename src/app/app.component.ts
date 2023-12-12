import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from "./test/test.component"; //add IMPORT HERE to display
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      CommonModule, 
      RouterOutlet, 
      TestComponent,
      FormsModule
    ]
})

export class AppComponent {
  title = 'myAngularProject-2';
  msg = 'Hello, Welcome to this page'
  a = 10;
  b = 5;
  ans = this.a + this.b;

  //interpolation
  inputVal = 'Hello';
  isDisabled = false;

// <!-- 9. Assignment Property binding with image tag -->
  imgSrc = '/assets/Angular.jpg'; 

// 10. Event biding with a Click Event
display(msg:string){
  alert(msg);
  }
//11. Event Binding with Click Event
dblClick = 0;
incrementOnDoubleClick(){
  this.dblClick++;
  }

onOver = 0;
incrementOnOver(){
  this.onOver++; 
  }

onLeave  = 0;
incrementOnLeave(){
  this.onLeave++; 
  }

onDrag  = 0;
incrementOnDrag(){
  this.onDrag++; 
  }

onDragOver  = 0;
incrementOnDragOver(){
  this.onDragOver++; 
  }

//12. Binding Keyboard Events
onKeyPress(){
  console.log("key pressed");
  }
onKeyDown(){
  console.log("key down event is triggered");
  }
//13. $event object
eventObject(eventParameter:any){
  console.log(eventParameter);
  console.log(eventParameter.key);
  //parameter is $event
  }
//14. Assignment (checking shift key status)
isShift(event:any){
  if(event.shiftKey && event.key ==='Y'){
    console.log('Shift + Y is pressed');
    }
    console.log(event.key);
  }
//15. Two Way Binding ngModel
staticInput:string = 'Static two-way binding';
dynamicInput:string = '';

//16. Two Way Binding ngModel
inputValForButton:string='';
dynamicVal:string='';
show(){
this.dynamicVal = this.inputValForButton;
};
buttonText:string = '';

}
