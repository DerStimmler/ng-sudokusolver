import {Sudoku} from './sudoku';

export interface SudokuSolver{
  solve(sudoku: Sudoku): boolean;
}
