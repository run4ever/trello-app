import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../shared/models/board.model';
import { BoardService } from '../shared/services/board.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() listId;
  @Input() card:Card;

  constructor(private boardService:BoardService) {
    this.listId = 2;
  }

  ngOnInit(): void {
    console.log(this);
  }

  deleteCardAction(idCard:number):void{
    if (confirm('Etes-vous sûr.e de vouloir supprimer définivitement cette carte ?')) {
      this.boardService.deleteCard(this.listId, idCard);
    } 
  }

  

}
