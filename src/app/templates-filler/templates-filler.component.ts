import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates-filler',
  templateUrl: './templates-filler.component.html',
  styleUrls: ['./templates-filler.component.css'],
})
export class TemplatesFillerComponent implements OnInit {
  templates_available: any[];
  template_name: any = [];
  date_all: any[];
  date_selected: any;

  constructor() {}

  async ngOnInit(): Promise<void> {
    this.templates_available = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  onChangeTemplate(template: any) {
    this.template_name = template.name;
    console.log(this.template_name);

    // let idx_template = this.templates_available.indexOf(template);
    // this.version_all = this.versions_available[idx_template];
    // this.version_selected = this.version_all[0]
  }

  showPopup() {}
}
