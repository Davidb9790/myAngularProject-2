import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from "./test/test.component"; //add IMPORT HERE to display

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TestComponent]
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
dblClick=0;
incrementOnDoubleClick(){
  this.dblClick++;
}

onOver=0;
incrementOnOver(){
  this.onOver++; 
}

onLeave=0;
incrementOnLeave(){
  this.onLeave++; 
}

}
