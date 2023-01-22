import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input () list: any = [{
    title: 'Vale por 1',
    imgUrl:
      'https://media.vandal.net/i/ivandal/1146x600/36723/smite-20181981837_1.jpg',
    description: 'QQue mas da',
  },{
    title: 'Vale por 2',
    imgUrl:
      'https://media.vandal.net/i/ivandal/1146x600/36723/smite-20181981837_1.jpg',
    description: 'QQue mas da',
  },{
    title: 'Vale por 3',
    imgUrl:
      'https://media.vandal.net/i/ivandal/1146x600/36723/smite-20181981837_1.jpg',
    description: 'QQue mas da',
  }]

}
