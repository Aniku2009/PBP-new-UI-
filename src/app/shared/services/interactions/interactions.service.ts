import {Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Database} from '../../interfaces/Database';
import {Query} from '../../interfaces/Query';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/internal/operators';
import 'rxjs-compat/add/operator/map';
import { DatabaseComponent } from '../../../database/database.component';
// import * as http from 'http';

@Injectable({
  providedIn: 'root'
})

export class InteractionsService {

  private getHttpOptions(url: string) {
    return {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': url,
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type,x-requested-with,Authorization,Access-Control-Allow-Origin',
        'Access-Control-Allow-Credentials': 'true',
      })
    };
  }

  public TempDbId: number = null;
  public showNewQueryDialog: boolean = false;
  public showManageDBsDialog: boolean = false;

  private loginToken = 'token';

  private mockDate = new DatePipe('en').transform(new Date('2018-07-12T00:00:00Z'), 'short');
  public legacySites: Database[];
  private url = 'http://10.128.33.183:9811/api/LegacySites';

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
  public currentDB: Database; // db for which is result
  public currentQuery: Query; // query for which is result

  public queryResults = [
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
  ];
  public gridRowData;

  constructor(private http: HttpClient) {
  }



  getDBs() {
    console.log(this.url);
    this.http.get(this.url).subscribe(
      (data: Database[]) => {
        this.legacySites = data;

        // this.currentDB = data [0];
        // this.currentQuery = this.currentDB.db_queries[0];

        console.log('Get DB updates completed successfully');
        console.log(data);
        this.setGridRowData();
      }
    );
  }


  setGridRowData() { // todo delete
  this.gridRowData = [];
    this.legacySites.forEach(e => {
      this.gridRowData.push(
        {
          Db_name: e.db_name,
          Display_name: e.db_display_name,
          State: e.db_state
        }
      );
    });
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

  // getDBs(): Observable<Database[]> {
  //   return this.http.get('./assets/json/DBList.json').map((res: any) => {
  //     const searchdataMap = new Database();
  //     res.collection.map(function (collection: any, next_: any) {
  //       this.legacySites .db_name.push(collection.title);
  //       this.legacySites .db_display_name.push(collection.);
  //       this.legacySites .db_state.push(collection.dbstate);
  //     });
  //    // this.legacySites = searchdataMap;
  //    return this.legacySites = searchdataMap;
  //   });
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
    console.warn("Enter to addDBQuery()", this.TempDbId, queryName, startDate, endDate);
    let namesArray = [];
    this.legacySites.forEach(e => {
      console.warn("Enter to foreach construction", e.db_id, this.TempDbId);
      if(e.db_id == this.TempDbId)
      {
        console.warn("Enter to if construction", );
        e.db_queries.push(
          {
            query_id: 4,
            query_name: queryName,
            start_date: startDate,
            end_date: endDate
          }
        );
      }
    });
    console.warn(this.legacySites);
    //return namesArray;




    // send post request to  http://PlaybackPortal/api/queries
    // with body:
    // {
    //      "db_id": dbId,
    // 			"query_name": queryName,
    // 			"start_date": startDate,
    // 			"end_date":  endDate
    // }
    // -----------------------------------
    // response:
    // {
    // 	"db_id": "string",
    // 	"query_id": "string",
    // 	"query_name": "string",
    // 	"start_date" : "date",
    // 	"end_date" :  "date"
    // 	}
    // in subscribe find in this.legacySites db by dbID
    // add query to queries array
  }

  // mapAllDbs() {  // todo delete
  //   this.legacySites.forEach(e => {
  //     if (e.db_state === 'unmapped') {
  //       e.db_state =  'mapped';
  //     }
  //   });
  //   this.postData(this.legacySites);
  //   this.getDBs();
  // }


  postData(postLegacySites: Database[]) { // todo delete
    console.log('post is ready to run');
    console.log(postLegacySites);
    this.http.post(this.url, postLegacySites, this.getHttpOptions(this.url))
      .subscribe(
      data => {
        console.log('POST Request is successful', data);
      },
      error => {
        console.log('Error', error);
      });
  }

  updateDBState(actionType: 'map' | 'unmap', db: Database) {
    console.log('post is ready to run');
    console.log(db);

    const dbData = {
      'db_type': db.db_type,
      'db_name': db.db_name,
      'db_display_name': db.db_display_name,
      'db_action_type': actionType
    };

    this.http.post(this.url, dbData, this.getHttpOptions(this.url))
      .subscribe(
        (updatedDB: Database) => {
          console.log('POST Request is successful', updatedDB);
          const dbIndex = this.legacySites.indexOf(db);
          this.legacySites[dbIndex] = updatedDB;
        },
      error => {
        console.log('Error', error);
      });
  }

  getResults(db: Database, query: Query) {
    this.currentDB = db;
    this.currentQuery = query;
  }

}
