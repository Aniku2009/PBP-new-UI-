import {Component, Input} from '@angular/core';
import {Database} from '../shared/interfaces/Database';
import {InteractionsService} from '../shared/services/interactions/interactions.service';

@Component({
  selector: 'pbp-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent {

  @Input() database: Database;

  showQueries: boolean = false;

  constructor(public interactionsService: InteractionsService) { }

  toggleQueries() {
    this.showQueries = !this.showQueries;
  }

  getInteractions(dbId: number, startDate: Date, endDate: Date) {
    this.interactionsService.getInteractions(dbId, startDate, endDate);
  }

  deleteQuery(dbId: number, queryId: number) {
    this.interactionsService.deleteQueryByDBIdAndQueryId(dbId, queryId);
  }

  newQuery(dbId: number){
    this.interactionsService.TempDbId = dbId;
  }

  CreateNewQuery(dbId: number){
    console.warn("Enter to CreateNewQuery()", dbId);
    this.interactionsService.TempDbId = dbId;
    console.warn("tempdbid", this.interactionsService.TempDbId);
    //this.interactionsService.addDBQuery(dbId, "cat", "2018-07-12T00:00:00Z", "2018-07-12T00:00:00Z");
  }

}
