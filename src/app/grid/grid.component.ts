import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Sudoku} from '../sudoku';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor() { }

  @Input() sudoku: Sudoku;
  @Output() sudokuChange: EventEmitter<Sudoku> = new EventEmitter<Sudoku>();

  ngOnInit(): void {
  }

  logCellInput() {
    console.log(this.sudoku.cells);
    this.sudokuChange.emit(this.sudoku);
  }
}
