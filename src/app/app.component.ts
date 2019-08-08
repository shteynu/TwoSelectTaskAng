import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  countries = {
    USA: ['New York', 'Chicago', 'Dallas', 'Los Angeles'],
    France: ['Paris', 'Lion', 'Cherburg', 'Marseille'],
    Germany: ['Berlin', 'Drezden', 'Hamburg', 'Munich'],
    Israel: ['Jerusalem', 'Tel-Aviv', 'Haifa', 'Rehovot'],
  };

  choiceHandler(event) {
    console.log(event);
  }
}
