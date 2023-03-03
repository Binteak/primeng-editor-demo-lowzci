import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  user: string | undefined;
  logged = true;
  menuStyle: any = { 'background-color': '#f71111', display: 'none' };
  paddingBottomNavContent: any = {
    'padding-bottom': '0px',
    'background-color': '#ec0000',
  };

  items: MegaMenuItem[];
  selectedItem = '';
  condShowScreen = '';

  ngOnInit() {
    this.items = [
      {
        label: 'Credit',
        icon: 'pi pi-file-excel',
        items: [
          [
            {
              label: 'Pantallas',
              items: [{ label: 'Summary' }, { label: 'Templates Filler' }],
            },
            // {
            //   label: 'Video 2',
            //   items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }],
            // },
          ],
          [
            // {
            //   label: 'Video 3',
            //   items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }],
            // },
            // {
            //   label: 'Video 4',
            //   items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }],
            // },
          ],
        ],
      },
      {
        label: 'CCR',
        icon: 'pi pi-file-excel',
        items: [
          // [
          //   {
          //     label: 'User 1',
          //     items: [{ label: 'User 1.1' }, { label: 'User 1.2' }],
          //   },
          //   {
          //     label: 'User 2',
          //     items: [{ label: 'User 2.1' }, { label: 'User 2.2' }],
          //   },
          // ],
          // [
          //   {
          //     label: 'User 3',
          //     items: [{ label: 'User 3.1' }, { label: 'User 3.2' }],
          //   },
          //   {
          //     label: 'User 4',
          //     items: [{ label: 'User 4.1' }, { label: 'User 4.2' }],
          //   },
          // ],
          // [
          //   {
          //     label: 'User 5',
          //     items: [{ label: 'User 5.1' }, { label: 'User 5.2' }],
          //   },
          //   {
          //     label: 'User 6',
          //     items: [{ label: 'User 6.1' }, { label: 'User 6.2' }],
          //   },
          // ],
        ],
      },
      {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        items: [
          [
            {
              label: 'Setting 1',
              items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }],
            },
            {
              label: 'Setting 2',
              items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }],
            },
          ],
        ],
      },
    ];
  }

  onChangeSelectItems(event) {
    console.log('Estoy en onChangeSelectItems');
    console.log(event.target.innerText);
    this.selectedItem = event.target.innerText.toString();

    if (this.selectedItem == 'Templates Filler') {
      console.log('entro en templates filler');
      this.condShowScreen = 'templates-filler';
    } else if (this.selectedItem == 'Summary') {
      this.condShowScreen = 'summary';
    } else {
      this.condShowScreen = '';
    }
  }
}
