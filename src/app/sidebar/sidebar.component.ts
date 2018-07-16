import {Component} from '@angular/core';
import {InteractionsService} from '../shared/services/interactions/interactions.service';
import {DBState} from '../shared/enums/DBState';

@Component({
  selector: 'pbp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public DBState = DBState;

  constructor (public interactionsService: InteractionsService) {}

}
