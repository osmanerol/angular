import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.scss']
})
export class ChildAComponent implements OnInit {
  id: string;
  name: string;
  constructor( private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id');
    this.name= this.route.snapshot.data['name'];
  }

  goToB() {
    this.router.navigate(['../../child-b'], { relativeTo: this.route })
  }

}
