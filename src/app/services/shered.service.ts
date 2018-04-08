import { Injectable } from '@angular/core';
import { League } from '../model/model';

@Injectable()
export class SheredService {
  selectedLeague:League;
  constructor() { }
  getSelectedLeague():League{
   return this.selectedLeague;
  }
  setSelectedLeague(league:League){
    this.selectedLeague=league;
  }

}
