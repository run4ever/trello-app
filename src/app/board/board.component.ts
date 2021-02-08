import { Component, OnInit } from '@angular/core';
import { Board } from '../shared/models/board.model';
import { BoardService } from '../shared/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board:Board;

  constructor(private boardService:BoardService) { }

  ngOnInit(): void {
    this.board = this.boardService.getBoard();
    console.log(this);
  }

  /**
   * Add list in board
   */
  addList(): void {
    let nameList = window.prompt('nom liste :');
    this.boardService.createList(nameList);
  }

  delList(id:number):void{
    if (confirm('Etes-vous sûr.e de vouloir supprimer définivitement cette liste ?')) {
      this.boardService.deleteList(id);
    } 
  }
  
}
