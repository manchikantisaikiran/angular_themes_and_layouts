import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { CustomSidebarComponent } from './custom-sidebar/custom-sidebar.component';



@NgModule({
  declarations: [
    CustomHeaderComponent,
    CustomSidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomHeaderComponent,
    CustomSidebarComponent,
    CommonModule
  ]
})
export class CustomAppModule { }
