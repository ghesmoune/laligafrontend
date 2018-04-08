import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../../services/ligue.service';
import { SheredService } from '../../services/shered.service';
import { League } from '../../model/model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedValue: League=new League();
  leagues: League[];
  constructor(private leagueService:LeagueService , private sheredService:SheredService) { }
  setSelectedLeauge(){
    this.sheredService.setSelectedLeague(this.selectedValue);
  }
  ngOnInit() {
      this.leagueService.getLeagues().subscribe((leagues)=>{this.leagues=leagues});
  }

}
