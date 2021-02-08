import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { Board, List, Card } from '../models/board.model';
import { data } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private data:Board = data;

  constructor() { }

  getBoard():Board {
    return this.data;
  }

  /**
   * Creates list
   * @returns void
   */
  createList(name:string):void{
    let newList:List = {id: Date.now(), name: name, cards:[] };
      this.data.push(newList);
  }

  /**
   * Deletes list
   */
  deleteList(idList:number): void{
    let index = this.data.findIndex( list => list.id === idList);
    this.data.splice(index,1);
  }

  /**
   * Deletes card
   */
  deleteCard(idList:number, idCard:number): void{
    let cardList = this.data.find( list => list.id === idList);
    let indexCard = cardList.cards.findIndex( card => card.id === idCard);
    cardList.cards.splice(indexCard,1);
  }

  addCard(idList:number){
    let newCard:Card = {id: Date.now(), title: "Nouvelle carte", content:null, priority:1}
    let cardList = this.data.find( list => list.id === idList);
    cardList.cards.push();

  }

  moveCard(listId:number, previousIndex:number, currentIndex:number):void{
    console.log('listId',listId);
    console.log('previousIndex',previousIndex);
    console.log('currentIndex',currentIndex);
    let list = this.data.find( item => item.id === listId);
    moveItemInArray(list.cards, previousIndex, currentIndex);

  }
  


}
