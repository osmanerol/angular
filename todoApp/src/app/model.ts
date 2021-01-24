export class Model {
  user : string;
  items : Array<ToDoItem>;
  constructor(){
    this.user = 'Osman';
    this.items = [
      new ToDoItem('Breakfast', true),
      new ToDoItem('Cinema',  false),
      new ToDoItem('Sport', false),
      new ToDoItem('Lesson', false)
    ]
  }
}

export class ToDoItem {
  description : string;
  action : boolean;
  constructor(description : string, action : boolean){
    this.description = description;
    this.action = action;
  }
}
