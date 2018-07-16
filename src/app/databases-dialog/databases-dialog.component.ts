import {Component, Input, OnChanges, ViewChild} from '@angular/core';
import {InteractionsService} from '../shared/services/interactions/interactions.service';

@Component({
  selector: 'pbp-databases-dialog',
  templateUrl: './databases-dialog.component.html',
  styleUrls: ['./databases-dialog.component.scss']
})
export class DatabasesDialogComponent implements OnChanges {

  @ViewChild('dialog') dialog: any;
  @Input() showDialog: boolean;

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

  constructor(public interactionsService: InteractionsService) {
    console.log('hhhhhhhhhhhhhh');
  }

  ngOnChanges() {
    console.log('-------' + this.showDialog);
    this.dialog.visible = this.showDialog;
  }

}
