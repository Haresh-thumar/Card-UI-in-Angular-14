import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mat-custom-element',
  templateUrl: './mat-custom-element.component.html',
  styleUrls: ['./mat-custom-element.component.scss']
})
export class MatCustomElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  /*---------------------------------------------------------------------------
              custom mat-select with inpur search & mat checkbox
  ---------------------------------------------------------------------------*/
  selectcheck = new FormControl('');
  selectedList: string[] = ['ishir.shah@corpository.com', 'vaishal.shah@corpository.com', 'nipam.shah@corpository.com', 'aniket.shah@corpository.com', 'mihir.baliya@corpository.com'];

}
