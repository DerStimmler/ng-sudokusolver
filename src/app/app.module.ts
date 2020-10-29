import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MenuComponent } from './menu/menu.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    SudokuComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [GridComponent, SudokuComponent, MenuComponent]
})
export class AppModule { }
