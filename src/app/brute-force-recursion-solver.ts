import { SudokuSolver } from './sudoku-solver';
import { Sudoku } from './sudoku';
import { Settings } from './settings';
import { Observable } from 'rxjs';

export class BruteForceRecursionSolver implements SudokuSolver {
  solve(sudoku: Sudoku, settings: Settings): Observable<Sudoku> {
    return null;
  }
}
