import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transport';

  toppings = new FormControl('');

  toppingList: string[] = ['ishir.shah@corpository.com', 'vaishal.shah@corpository.com', 'nipam.shah@corpository.com', 'aniket.shah@corpository.com', 'mihir.baliya@corpository.com'];
}
