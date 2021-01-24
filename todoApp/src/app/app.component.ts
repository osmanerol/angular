import { Component } from '@angular/core';
import { Model, ToDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model = new Model();
  isDisplay : boolean = false;

  getName(){
    return this.model.user;
  }

  getItems(){
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action);
  }

  addItem(item : string){
    if(item !== '') {
      this.model.items.push(new ToDoItem(item, false));
    }
  }

}
