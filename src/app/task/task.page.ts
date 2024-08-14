import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage {
  taskForm: FormGroup;
  tasks: Array<any> = [];

  error_messages = {
    Title: [
      { type: 'required', message: 'Title is required.' },
      {
        type: 'minlength',
        message: 'Title must be at least 3 characters long.',
      },
    ],
    Description: [
      { type: 'required', message: 'Description is required.' },
      {
        type: 'minlength',
        message: 'Description must be at least 10 characters long.',
      },
    ],
  };

  constructor(public formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      Title: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ),
      Description: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(10)])
      ),
      Done: new FormControl({ value: false, disabled: true }), // Deshabilitado por defecto
    });

    this.taskForm.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.taskForm.get('Done')?.enable();
      } else {
        this.taskForm.get('Done')?.disable();
      }
    });
  }

  public save() {
    const formData = {
      Title: this.taskForm.value.Title,
      Description: this.taskForm.value.Description,
      Done: this.taskForm.value.Done,
    };

    this.tasks.push(formData);
    this.taskForm.reset();
  }
}
