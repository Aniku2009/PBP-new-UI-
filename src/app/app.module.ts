import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {DatabaseComponent} from './database/database.component';
import {QueryResultsComponent} from './query-results/query-results.component';
import {NewQueryComponent} from './new-query/new-query.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {DatabasesDialogComponent} from './databases-dialog/databases-dialog.component';

library.add(fas);

import {MCRButtonModule,
        MCRDateRangeModule,
        MCRDialogModule,
        MCRGridModule,
        MCRLabelModule,
        MCRTextFieldModule,
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
    FontAwesomeModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    MCRTopBarModule,
    MCRDialogModule,
    MCRTextFieldModule,
    MCRGridModule,
    MCRButtonModule,
    MCRLabelModule,
    MCRDateRangeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
