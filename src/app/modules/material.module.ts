import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MaterialModule } from './modules/material.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatSidenavModule,
    
  ],  
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
