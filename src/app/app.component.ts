import { Component } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
    text1: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';
    text2: string;


    unit_all: any[]; 
    unit_selected: any;
    date_all: any[];
    date_selected: any;

    cities: City[];
    selectedCity: City;

    constructor() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
    
    async ngOnInit(): Promise<void> {







    }
      
}

