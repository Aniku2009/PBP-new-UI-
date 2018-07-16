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

}
