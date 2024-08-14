import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskPageRoutingModule } from './task-routing.module';
import { Routes, RouterModule, RoutesRecognized } from '@angular/router';



import { TaskPage } from './task.page';
import { TaskcardComponent } from '../taskcard/taskcard.component';

const routes: Routes = [
  {
    path: '',
    component: TaskPage
  }

];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    TaskPageRoutingModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TaskPage, TaskcardComponent],
})
export class TaskPageModule {}
