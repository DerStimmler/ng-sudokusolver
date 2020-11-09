import { SudokuSolver } from './sudoku-solver';
import { Sudoku } from './sudoku';
import { RuleChecker } from './rule-checker';
import { Settings } from './settings';
import { Utils } from './utils';
import { Observable } from 'rxjs';

export class BacktrackingSolver implements SudokuSolver {
  solve(sudoku: Sudoku, settings: Settings): Observable<Sudoku> {
    return Observable.create(observer => {
      const cellsToSolve = sudoku.cells.filter(x => !x.locked);

      let currentCell = 0;
      let newTry = true;

      while (true) {
        if (currentCell === -1) return;

        let cell = cellsToSolve[currentCell];

        if (newTry) {
          cell.value = null;
          newTry = false;
        }

        if (cell.value === 9) {
          currentCell--;
          cell.value = null;
          continue;
        }

        cell.value++;

        console.log(`Trying ${cell.value} at ${cell.index}`);

        sudoku.insertValue(cell.index, cell.value);
        const success = new RuleChecker(sudoku).checkInsertion(
          cell.index,
          cell.value
        );

        if (success) {
          currentCell++;
          newTry = true;
        } else if (cell.value === 9) {
          cell.value = null;
          currentCell--;
        }

        if (sudoku.cells[sudoku.cells.length - 1].value !== null && success) {
          return;
        }

        Utils.delay(settings.speed);
        observer.next(sudoku);
      }
      observer.complete();
    });
  }
}
