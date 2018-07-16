import {Component} from '@angular/core';
import {InteractionsService} from '../shared/services/interactions/interactions.service';
import {DBState} from '../shared/enums/DBState';
import {DatabasesDialogComponent} from '../databases-dialog/databases-dialog.component';
import {GridOptions} from 'ag-grid';

@Component({
  selector: 'pbp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public DBState = DBState;
  gridApi;
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

  constructor (public interactionsService: InteractionsService) {}

  private onGridReady (params) {
    this.gridApi = params.api;
    return this.gridApi.sizeColumnsToFit();
  }
}
