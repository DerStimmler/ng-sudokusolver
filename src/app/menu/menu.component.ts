import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BruteForceRecursionSolver} from '../brute-force-recursion-solver';
import {Settings} from '../settings';
import {SudokuSolver} from '../sudoku-solver';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  @Output() solveButtonClicked = new EventEmitter();
  @Output() settingsChange = new EventEmitter<Settings>();
  algorithmOptions: [string, string, SudokuSolver][] = [[BruteForceRecursionSolver.name, 'Brute Force Recursion', new BruteForceRecursionSolver()],[BruteForceRecursionSolver.name, 'Brute Force Recursion', new BruteForceRecursionSolver()]];
  settings: Settings = new Settings();

  ngOnInit(): void {
    this.settings.speed = 1;
    this.settings.size = 9;
    this.settings.algorithm = this.algorithmOptions[0][2];
  }

  handleSolveButtonClick(): void {
    this.solveButtonClicked.emit();
  }

  handleAlgorithmChange(className: string) :void{
    this.settings.algorithm = this.algorithmOptions.filter(x => x[0] === className)[0][2];
  }
}
