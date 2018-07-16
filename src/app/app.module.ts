import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {DatabaseComponent} from './database/database.component';
import {QueryResultsComponent} from './query-results/query-results.component';
import {NewQueryComponent} from './new-query/new-query.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {DatabasesDialogComponent} from './databases-dialog/databases-dialog.component';



import {MCRButtonModule,
        MCRDateRangeModule,
        MCRDialogModule,
        MCRGridModule,
        MCRTopBarModule} from 'mcr-components';

@NgModule({
  declarations: [
    AppComponent,
    DatabaseComponent,
    QueryResultsComponent,
    NewQueryComponent,
    SidebarComponent,
    DatabasesDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MCRTopBarModule,
    MCRDialogModule,
    MCRGridModule,
    MCRButtonModule,
    MCRDateRangeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
