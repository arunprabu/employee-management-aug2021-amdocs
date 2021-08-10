import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <div>
      <button (click)="handleSendData()">Send Data</button>
    </div>
  `,
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 0: HAve the data
  profileName = 'Arun';

  // Step 1: Create an obj for Event Emitter Class
  @Output() profileLoaded = new EventEmitter(); // Step 2: Make it a custom event with @Output()

  constructor() { }

  ngOnInit(): void {

  }

  handleSendData(): void {
    setTimeout( () => {
      // Step 3: Emit the custom event with data
      this.profileLoaded.emit(this.profileName);
    }, 3000);
  }

}
