import { Component } from '@angular/core';
import {InteractionsService} from './shared/services/interactions/interactions.service';

@Component({
  selector: 'pbp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public interactionsService: InteractionsService) {
    // this.interactionsService.currentDB = this.interactionsService.legacySites[1]; // hardcoded
    // this.interactionsService.currentQuery = this.interactionsService.legacySites[1].db_queries[1]; // hardcoded

    // this.interactionsService.getDBs();
    //this.interactionsService.getQuerys();
  }
}
