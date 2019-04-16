import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularMaterialModule } from '../shared/angular-material.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, AngularMaterialModule, FlexLayoutModule],
  exports: [SideNavComponent, FlexLayoutModule]
})
export class SharedModule {}
