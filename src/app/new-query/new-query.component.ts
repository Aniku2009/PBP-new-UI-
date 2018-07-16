import {Component, ElementRef, Input, OnChanges, ViewChild} from '@angular/core';
import {InteractionsService} from '../shared/services/interactions/interactions.service';
import {DateRange} from 'mcr-components';

@Component({
  selector: 'pbp-new-query',
  templateUrl: './new-query.component.html',
  styleUrls: ['./new-query.component.scss']
})
export class NewQueryComponent implements OnChanges {

  @ViewChild('dateRange') dateRangeRef: ElementRef;
  private dateFrom: string = null;
  private dateTo: string = null;
  private queryName: string = null;

  public myModel = {
    dtRange: {
      dateFrom: new Date(),
      dateTo: new Date()
    }
  };

  dateRangeChanged(dateRange: DateRange) {
    console.log(this.myModel.dtRange);
    this.dateFrom = dateRange.from.toString();
    this.dateTo = dateRange.to.toString();
  }
  onNameChanged(name: string)
  {
    this.queryName = name;
  }
  //@ViewChild('dialog') dialog: any;
 // @Input() showDialog: boolean;

/*   dialogModalConfiguration = {
    type: 0,
    headerTitle: 'Header',
    message: 'MESSAGE',
    modal: true,
    resizable: false,
    isClosable: true,
    isCloseOnEscape: true,
    heightOfDialog: 280,
    widthOfDialog: 420
  }; */
  
  constructor(public interactionsService: InteractionsService) {
    console.log('hhhhhhhhhhhhhh');

   }

  /* addDBQuery(dbId: number, queryName: string, startDate: Date, endDate: Date) {
    this.addDBQuery(dbId, queryName, startDate, endDate);
  } */

  testdb()
  {
    this.interactionsService.addDBQuery(this.queryName, this.dateTo, this.dateFrom);
    console.warn(this.dateFrom, this.dateTo, this.queryName);
  }
  ngOnChanges() {
    /* console.log('-------' + this.showDialog);
    this.dialog.visible = this.showDialog; */
  }

}
