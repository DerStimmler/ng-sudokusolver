import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BruteForceRecursionSolver } from '../brute-force-recursion-solver';
import { Settings } from '../settings';
import { SudokuSolver } from '../sudoku-solver';
import { BacktrackingSolver } from '../backtracking-solver';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor() {}

  @Output() solveButtonClicked = new EventEmitter();
  @Output() settingsChange = new EventEmitter<Settings>();
  @Output() clearButtonClicked = new EventEmitter();
  algorithmOptions: [string, string][] = [
    [BacktrackingSolver.name, 'Backtracking']
  ];
  settings: Settings = new Settings();

  ngOnInit(): void {
    this.settings.speed = 1;
    this.settings.size = 9;
    this.settings.algorithm = this.algorithmOptions[0][1];
  }

  handleSolveButtonClick(): void {
    this.solveButtonClicked.emit();
  }

  handleAlgorithmChange(className: string): void {
    this.settings.algorithm = this.algorithmOptions.filter(
      x => x[0] === className
    )[0][1];
  }

  handleClearButtonClick(): void {
    this.clearButtonClicked.emit();
  }
}
