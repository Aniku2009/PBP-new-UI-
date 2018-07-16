import {Query} from './Query';
import {DBState} from '../enums/DBState';

export interface Database {
  db_id: number; 	// if mapped
  db_type: string; 	// "8.9"
  db_name: string;	// uniq
  db_display_name: string;
  db_state: string; // DBState; // 'mapped' | 'unmapped';
  db_queries: Query[]; // | any[];
}
