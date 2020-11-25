import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Task } from './model';
import { GetTasksService } from './get-tasks.service'
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [ GetTasksService ]
})
export class AppComponent {
  title = 'BankLeumi';
  selectedTitle: string;
  listTasks: Task[];
  selectedTask: Task;
  errorR: string;
  private subscriptionTasks: Subscription;

  constructor(private getTasksService: GetTasksService){}

  searchTasks(event){
    this.selectedTask=null;
    this.subscriptionTasks = this.getTasksService.getTasks(event.query)
    .pipe(catchError(err => this.errorR = err))
    .subscribe((tasks: Task[]) => {
      this.listTasks = tasks
    });
  }

  selectTask(event){
    this.selectedTask = event;
  }

  ngOnDestroy() {
    if ( this.subscriptionTasks != null ) {
      this.subscriptionTasks.unsubscribe();
    }
  }

}
