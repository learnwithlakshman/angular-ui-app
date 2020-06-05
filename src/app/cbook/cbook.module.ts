import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CbookRoutingModule } from './cbook-routing.module';
import { CbookComponent } from './cbook.component';
import { CbookhomeComponent } from './cbookhome/cbookhome.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CbookComponent, CbookhomeComponent],
  imports: [
    CommonModule,
    CbookRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CbookModule { }
