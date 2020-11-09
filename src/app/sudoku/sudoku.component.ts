import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Sudoku } from '../sudoku';
import { SudokuGenerator } from '../SudokuGenerator';
import { Settings } from '../settings';
import { BacktrackingSolver } from '../backtracking-solver';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss']
})
export class SudokuComponent implements OnInit {
  constructor() {}

  sudoku$: Observable<Sudoku>;
  settings: Settings;

  ngOnInit(): void {
    this.settings = { size: 9, algorithm: null, speed: 1 };
    this.sudoku$ = SudokuGenerator.createNewSudoku(this.settings.size);
  }

  solveSudoku(): void {
    this.sudoku$.subscribe(x => {
      x.lockCells();
      this.sudoku$ = new BacktrackingSolver().solve(x, this.settings);
    });
  }

  clearSudoku(): void {
    this.sudoku$ = SudokuGenerator.createNewSudoku(this.settings.size);
  }
}
