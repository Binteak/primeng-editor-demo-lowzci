import { Component, OnInit } from '@angular/core';

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

  menuBtnClass: any = 'pi pi-bars';

  purposes: any[] = ['Credit Risk', 'Climate Risk'];
  exGroups: any[] = ['EBA23', 'ECB22'];
  exercises: any[] = ['Short term transition'];

  purposeSelected: any = 'CREDIT';
  exGroupSelected: any;
  exerciseSelected: any;
  window_name: string = '';

  purpose_model = 'CREDIT';

  ngOnInit() {
    window.addEventListener('scroll', function (e) {
      const naveg = document.getElementsByClassName(
        'navbar navbar-dark red lighten-1 shadow'
      );
    });

    let l_storage: any = localStorage.getItem('full_name');

    // this.purposeSelected = this.cookieService.get('purpose');
    // this.exGroupSelected = this.cookieService.get('exgroup');
    // this.exerciseSelected = this.cookieService.get('exercise');

    // if (this.purposeSelected != '')
    //     this.purpose_model = this.purposeSelected

    // if(this.purpose_model == 'CREDIT'){
    //     this.cookieService.set( 'exgroup', 'EBA23', {path: '/'});
    //     this.exGroupSelected = 'EBA23'
    // }else{
    //   this.cookieService.set( 'exgroup', 'ECB22', {path: '/'});
    //   this.exGroupSelected = 'ECB22'
    // }

    // this.cookieService.set( 'purpose', this.purpose_model, {path: '/'});

    //Comprobar si estamos en una pantalla u otra
    let path = window.location.pathname;

    //       let paths = ["upload-data", "upload-rea", "upload-template"];

    //       for (let i = 0; i < paths.length; i++) {
    //         if (path.includes(paths[i])) {
    //           this.window_name = paths[i].split("-")[1].toUpperCase() + " Uploading";
    //         }
    //       }

    //       let paths_prueba = ["upload-data", "upload-rea", "upload-template", "consolidation"];
    //       for (let i = 0; i < paths.length; i++) {
    //         if (path.includes(paths_prueba[i])) {
    //           this.window_name = paths[i].split("-")[1].toUpperCase() + " Uploading";
    //           this.window_name = paths[i];
    //         }
    //       }

    if (path.includes('upload-data')) {
      this.window_name = 'Data Uploading';
    }
    if (path.includes('upload-rea')) {
      this.window_name = 'Rea Uploading';
    }
    if (path.includes('upload-template')) {
      this.window_name = 'Template Uploading';
    }

    if (path.includes('consolidation')) {
      this.window_name = 'Consolidation';
    }
    if (path.includes('consolidation-visualization')) {
      this.window_name = 'Consolidation Visualization';
    }
    if (path.includes('summary')) {
      this.window_name = 'Summary';
    }
    if (path.includes('dashboard-process')) {
      this.window_name = 'Dashboard Process';
    }

    if (path.includes('templates-filler')) {
      this.window_name = 'Templates Filler';
    }

    if (path.includes('reconciliation')) {
      this.window_name = 'Reconciliation';
    }
    if (path.includes('upload-hive')) {
      this.window_name = 'Upload Hive';
    }
    if (path.includes('data-extraction')) {
      this.window_name = 'Data Extraction';
    }
    if (path.includes('launch-transitions')) {
      this.window_name = 'Marginals';
    }
    if (path.includes('data-merge')) {
      this.window_name = 'Data Merge';
    }
    if (path.includes('data-preparation')) {
      this.window_name = 'Data Preparation';
    }
    if (path.includes('agregation')) {
      this.window_name = 'Agregation';
    }
    if (path.includes('marginals')) {
      this.window_name = 'Marginals';
    }

    if (
      path.includes('reconciliation') ||
      path.includes('upload-hive') ||
      path.includes('data-extraction') ||
      path.includes('launch-transitions') ||
      path.includes('data-merge') ||
      path.includes('agregation') ||
      path.includes('marginals') ||
      path.includes('data-preparation')
    ) {
      this.purposeSelected = 'Credit Risk';
      this.exGroupSelected = 'SP';
    }
    //else{
    //           this.purposeSelected = 'Climate Risk';
    //           this.exGroupSelected = 'ECB22';
    //       }

    this.exerciseSelected = 'Short Term Transition';

    //       if(this.purposeSelected == ''){
    //           this.logout()
    //       }
  }

  onChangePurpose(purpose: any) {
    this.purposeSelected = purpose;
    // this.cookieService.set( 'purpose', purpose, {path: '/'});

    // if(purpose == 'CREDIT'){
    //     this.exGroupSelected = 'EBA23'
    //     this.cookieService.set('exgroup', 'EBA23', {path: '/'})
    // }
    // else{
    //     this.exGroupSelected = 'ECB22'
    //     this.cookieService.set('exgroup', 'ECB22', {path: '/'})
    // }

    window.location.reload();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('full_name');
    //     this.cookieService.deleteAll();
    //     this.router.navigate(['/logout']);
    //     this.logged = false;
  }

  toggleMenu() {
    if (this.menuStyle.display == 'none') {
      this.paddingBottomNavContent = {
        'padding-bottom': '15px',
        'background-color': '#ec0000',
      };

      this.menuStyle = { 'background-color': '#f71111', display: 'block' };
      this.menuBtnClass = 'pi pi-times';
    } else {
      this.paddingBottomNavContent = {
        'padding-bottom': '0px',
        'background-color': '#ec0000',
      };
      this.menuStyle = { 'background-color': '#f71111', display: 'none' };
      this.menuBtnClass = 'pi pi-bars';
    }
  }
}
