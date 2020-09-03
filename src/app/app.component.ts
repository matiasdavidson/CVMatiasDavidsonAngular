import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cv-matias-davidson-angular';
  me = {
    firstName: 'Matias',
    lastName: 'Davidson',
    age: '28',
    title: 'Full Stack Developer',
    aboutMe: 'Full Stack Web Developer and marketing gradute. I have experience with Angular and Laravel projects, and using PHP, JS and MYSQL.',
  };
}
