import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './model';
import{ api } from './globale';

@Injectable()
export class GetTasksService {

  constructor(private http: HttpService) { }

  public getTasks( keyWord ){
    var url = api.selectedTasks + '/' + keyWord;
    return this.http.get<Task[]> ( url );
  }
}
