import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes = [
    {
      text: 'ማረፍያ',
      title: 'Home',
      path: '/'
    },
    {
      text: 'ቃላት',
      title: 'Words',
      path: '/words'
    },
    {
      text: 'ፍራፍሬ',
      title: 'Fruits',
      path: '/fruits'
    },
    {
      text: 'ጨዋታ',
      title: 'Games',
      path: '/games'
    }
  ];
  title = 'learn-amharic';
}
