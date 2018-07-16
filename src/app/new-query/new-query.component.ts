import {Component, Input, OnChanges, ViewChild} from '@angular/core';
import {InteractionsService} from '../shared/services/interactions/interactions.service';

@Component({
  selector: 'pbp-new-query',
  templateUrl: './new-query.component.html',
  styleUrls: ['./new-query.component.scss']
})
export class NewQueryComponent {

  @ViewChild('dialog') dialog: any;
  @Input() showDialog: boolean;
  constructor(interactionsService: InteractionsService) { }

  dialogModalConfiguration = {
    type: 0,
    headerTitle: 'Header',
    message: 'MESSAGE',
    modal: true,
    resizable: false,
    isClosable: true,
    isCloseOnEscape: true,
    heightOfDialog: 280,
    widthOfDialog: 420
  };

  addDBQuery(dbId: number, queryName: string, startDate: Date, endDate: Date) {
    this.addDBQuery(dbId, queryName, startDate, endDate);
  }

  ngOnChanges() {
    console.log('-------' + this.showDialog);
    this.dialog.visible = this.showDialog;
  }

}
