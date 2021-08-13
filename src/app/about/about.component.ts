import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  topicName = 'Pipes in Angular';

  today: Date = new Date();

  dummyText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia error eaque autem';

  constructor() { }

  ngOnInit(): void {
  }

}
