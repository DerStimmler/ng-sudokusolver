import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Sudoku} from '../sudoku';
import {SudokuGenerator} from '../SudokuGenerator';
import {Settings} from '../settings';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss']
})
export class SudokuComponent implements OnInit, OnChanges {

  constructor() { }

  sudoku: Sudoku;
  settings: Settings;

  ngOnInit(): void {
    this.settings = {size: 9, algorithm: null, speed: 1};
    this.sudoku = SudokuGenerator.createNewSudoku(this.settings.size);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.sudoku.cells);
  }


  logSudokuChange() {
    console.log(this.sudoku.cells);
  }
}
