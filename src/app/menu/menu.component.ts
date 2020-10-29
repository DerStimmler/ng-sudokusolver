import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BruteForceRecursionSolver} from '../brute-force-recursion-solver';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  @Output() solveButtonClicked = new EventEmitter();
  speed = 1;
  algorithmOptions: [string, string][] = [[BruteForceRecursionSolver.name, 'Brute Force Recursion']];

  ngOnInit(): void {
  }

  handleSolveButtonClick(): void {
    this.solveButtonClicked.emit();
  }
}
