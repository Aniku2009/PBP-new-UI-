import {Injectable, Component, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Database} from '../../interfaces/Database';
import {Query} from '../../interfaces/Query';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/internal/operators';
import 'rxjs-compat/add/operator/map';
import { DatabaseComponent } from '../../../database/database.component';
import { Interaction } from '../../interfaces/Interaction';
import {Headers, RequestOptions} from '@angular/http';


@Injectable({
  providedIn: 'root'
})


export class InteractionsService {

  public TempDbId: number = null;
  public showNewQueryDialog: boolean = false;
  public showManageDBsDialog: boolean = false;
  public url: string = "http://localhost:24720/api";
  private loginToken = 'token';

  private mockDate = new DatePipe('en').transform(new Date('2018-07-12T00:00:00Z'), 'short');
  public legacySites: Database[];


  
  public currentDB: Database[]; // db for which is result
  public currentQuery: Query[]; // query for which is result
  public queryResults: Interaction [];

  /* public queryResults = [
    {
      Segment_Id: 336975428,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 4654646545858,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 35654673,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 7726772,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 784336575,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 68794168756487,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 336975428,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 4654646545858,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 35654673,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 7726772,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 784336575,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 68794168756487,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 336975428,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 4654646545858,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 35654673,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 7726772,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 784336575,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 68794168756487,
      Segment_Start_Time: this.mockDate,
      Segment_Stop_Time: this.mockDate,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    }
  ]; */

  constructor(private http: HttpClient) {
  }

  getDBs(): Database[]  {
    console.warn('Enter to getDBs()');
    this.updateBDs();
    console.warn("results of: " + this.updateBDs());
    return this.legacySites;
  }

  updateBDs() {
    this.http.get(this.url + "/LegacySites").subscribe(
      (data: Database[]) => {
        this.legacySites = data;
        this.currentDB = data;
        //this.currentQuery = this.currentDB.db_queries[0];
        return this.legacySites;
      }
    );
  }

  getRowData() {
    let namesArray = [];
    this.legacySites.forEach(e => {
      namesArray.push(
        {
          Db_name: e.db_name,
          Display_name: e.db_display_name,
          State: e.db_state,
          //Query: e.db_queries
        }
      );
    });
    //this.currentDB = namesArray;
    return namesArray;
  }


  // getDBs(): Database[]  {
  //   this.updateBDs();
  //   return this.legacySites;
  // }
  //
  // updateBDs() {
  //   this.http.get('./assets/json/DBList.json').subscribe(
  //     (data: Database[]) => {
  //       this.legacySites = data;
  //       console.log(data);
  //       // return this.legacySites;
  //     }
  //   );
  // }

  // getDBs(): Database[]  {
  //   this.updateBDs();
  //   return this.legacySites;
  // }
  //
  // updateBDs() {
  //   this.http.get('./assets/json/DBList.json').subscribe(
  //     (data: Database[]) => {
  //       this.legacySites = data;
  //       console.log(data);
  //       // return this.legacySites;
  //     }
  //   );
  // }

  getInteractions(dbId: number, startDate: Date, endDate: Date) {
    this.http.get(this.url + "/interactions").subscribe(
      (data: Interaction[]) => {
        this.queryResults = data;
        });
        /* console.log('dddddd');
        this.legacySites.forEach(site =>{
          if(site.db_id==dbId)
          {
            this.currentDB.push(site);
          }}) */
    // send get request to get interactions
    // http://PlaybackPortal/api/interactions/{dbId}
    // start date and end Date, loginToken in headers
    // all dates in response set to date format like in this.mockDate: new DatePipe('en').transform(new Date('string with date'), 'short');
    // response assign to this.queryResults in subscribe()
  }

  deleteQueryByDBIdAndQueryId(dbId: number, queryId: number) {
    // now query deletion should be only on FE
    // find db in this.legacySites by dbId
    // then find in db query by query id
    // and remove from array
  }

  public addDBQuery(queryName: string, startDate: string, endDate: string) {
    this.legacySites.forEach(e => {
      if(e.db_id == this.TempDbId)
      {
        this.http.post(this.url + '/queries', {db_id:this.TempDbId, query_name: queryName, start_date: startDate, end_date: endDate})
          .subscribe(
          (data: Query[]) => {
            e.db_queries.push(
              {
                query_id: data['query_id'],
                query_name: data['query_name'],
                start_date: data['start_date'],
                end_date: data['end_date']     
              }    
            );
          },
          error => {
            console.log('Error', error);
          }
          )        
      }
    });
  }

  mapAllDbs() {
    let namesArray = [];
    this.legacySites.forEach(e => {
      if (e.db_state === 'unmapped') {
        e.db_state =  'mapped';
      }
    });
    this.postData(this.legacySites);
    this.getDBs();
  }

  postData(postLegacySite: Database[]) {
    console.log('postData - post is ready to run');
    console.log('postData - ' + postLegacySite);
    console.log('postData - ' + this.url);
    this.http.post(this.url + '/LegacySites', postLegacySite)
      .subscribe(
      data => {
        console.log('postData - POST Request is successful', data);
      },
      error => {
        console.log('Error', error);
      }
      );
  }
  

  /* postData(postLegacySite: Database[]) {
    return this.http.post('http://localhost:60820/api/values', postLegacySite);
  } */

  // public legacySites: Database[] = [
  //   {
  //     db_id: 1, db_type: '8.9', db_name: 'nice_cls_89', db_display_name:  'Database 1', db_state: 'mapped',
  //     db_queries: [
  //       { query_id: 1,  query_name: 'Query 45345', start_date : this.mockDate,  end_date :  this.mockDate },
  //       { query_id: 2,  query_name: 'Query 3457', start_date : this.mockDate,  end_date :  this.mockDate },
  //       { query_id: 3,  query_name: 'Query 8554', start_date : this.mockDate,  end_date :  this.mockDate }
  //     ]
  //   },
  //   {
  //     db_id: 2, db_type: '8.9', db_name: 'nice_cls_89', db_display_name:  'City 8_9', db_state: 'mapped',
  //     db_queries: [
  //       { query_id: 1,  query_name: 'Query 7633', start_date : this.mockDate,  end_date :  this.mockDate },
  //       { query_id: 2,  query_name: 'Department1', start_date : this.mockDate,  end_date :  this.mockDate },
  //       { query_id: 3,  query_name: 'Query 4354', start_date : this.mockDate,  end_date :  this.mockDate }
  //     ]
  //   },
  //   {
  //     db_id: 8, db_type: '8.9', db_name: 'nice_cls_89', db_display_name:  'DB 32423', db_state: 'mapped',
  //     db_queries: [
  //       { query_id: 1,  query_name: 'Query 7633', start_date : this.mockDate,  end_date :  this.mockDate },
  //       { query_id: 2,  query_name: 'Query 7456', start_date : this.mockDate,  end_date :  this.mockDate },
  //       { query_id: 3,  query_name: 'Query 4354', start_date : this.mockDate,  end_date :  this.mockDate }
  //     ]
  //   },
  //   { db_id: -1, db_type: '8.9', db_name: 'nice_cls_89', db_display_name:  'Database 8621', db_state: 'mapped', db_queries: []},
  //   { db_id: -1, db_type: '8.9', db_name: 'nice_cls_89', db_display_name:  'Database 56', db_state: 'mapped', db_queries: []},
  // ];
 // public legacySites: Database;
}


