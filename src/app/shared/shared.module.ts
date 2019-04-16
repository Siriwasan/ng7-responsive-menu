import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../shared/angular-material.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [SideNavComponent]
})
export class SharedModule {}
