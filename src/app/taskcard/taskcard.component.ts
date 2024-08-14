import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-taskcard',
  templateUrl: './taskcard.component.html',
  styleUrls: ['./taskcard.component.scss'],
})
export class TaskcardComponent   {

  @Input() tasks: any;

  constructor() {
    
   }

  

}
