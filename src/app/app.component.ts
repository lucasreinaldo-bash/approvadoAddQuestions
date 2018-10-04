import { Component } from '@angular/core';
import { TaskService } from './todo/task.service';

@Component({
  selector: 'my-app',
  template: `<todo-task></todo-task>`,
  providers: [TaskService]
})
export class AppComponent  { name = 'Angular'; }
