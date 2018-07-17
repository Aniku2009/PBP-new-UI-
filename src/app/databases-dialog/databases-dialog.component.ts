import {Component, Input, OnChanges, ViewChild} from '@angular/core';
import {InteractionsService} from '../shared/services/interactions/interactions.service';
import {GridOptions} from 'ag-grid';

@Component({
  selector: 'pbp-databases-dialog',
  templateUrl: './databases-dialog.component.html',
  styleUrls: ['./databases-dialog.component.scss']
})
export class DatabasesDialogComponent implements OnChanges {

  @ViewChild('dialog') dialog: any;
  @Input() showDialog: boolean;

  gridApi;
  // dialogModalConfiguration = {
  //   type: 0,
  //   headerTitle: 'Header',
  //   message: 'MESSAGE',
  //   modal: true,
  //   resizable: false,
  //   isClosable: true,
  //   isCloseOnEscape: true,
  //   heightOfDialog: 280,
  //   widthOfDialog: 420
  // };

  gridHeaders = [
    {headerName: 'DB NAME', field: 'Db_name'},
    {headerName: 'DISPLAY NAME', field: 'Display_name'},
    {headerName: 'STATE', field: 'State'},
  ];

  gridOptions: GridOptions = {
    domLayout: 'autoHeight',
    rowSelection: 'multiple',
    debug: true,
    onGridReady: this.onGridReady.bind(this),
  };

  constructor(public interactionsService: InteractionsService) {
    console.log('hhhhhhhhhhhhhh');
  }

  ngOnChanges() {
    console.log('-------' + this.showDialog);
    this.dialog.visible = this.showDialog;
  }

  private onGridReady (params) {
    this.gridApi = params.api;
    return this.gridApi.sizeColumnsToFit();
  }

}


