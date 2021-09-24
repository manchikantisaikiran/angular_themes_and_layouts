import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-sidebar',
  templateUrl: './custom-sidebar.component.html',
  styleUrls: ['./custom-sidebar.component.scss']
})
export class CustomSidebarComponent implements OnInit {

  links = [
    {
      link: 'Dashboards',
      childLinks: ['Ecommerce','CRM'],
      activeLink: false
    },
    {
      link: 'Forms',
      childLinks: ['Controls','Extended Controls','Sample Layouts'],
      activeLink: false
    },
    {
      link: 'Tables',
      childLinks: ['regular Tables', 'Extended tables','Smart Tables','Tables with Filters'],
      activeLink: false
    },
    {
      link: 'Charts',
      childLinks: ['E-charts','NGX charts','Chart js'],
      activeLink: false
    },
    {
      link: 'Utilities',
      childLinks: ['Notifications','Modala','File Uploader','Auto Complete','Alerts'],
      activeLink: false
    },
  ];

  @Output() onToggleSidebar = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  openChildLinks(i:any){
    this.links[i].activeLink = !this.links[i].activeLink;
    this.links.forEach((e,j)=> {
      if(i!==j)
      e.activeLink = false
    });
    console.log(i);
  }

}
