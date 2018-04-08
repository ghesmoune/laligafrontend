import { Component, OnInit } from '@angular/core';
import { League } from '../../model/model';
import { LeagueService } from '../../services/ligue.service';
import {MatDialog} from '@angular/material';
import { ConferamtionDialogComponent } from '../../popups/conferamtion-dialog/conferamtion-dialog.component';

@Component({
  selector: 'app-liste-leagues',
  templateUrl: './liste-leagues.component.html',
  styleUrls: ['./liste-leagues.component.css']
})
export class ListeLeaguesComponent implements OnInit {
  leagues:League[];
  constructor(private leagueService:LeagueService,public dialog: MatDialog) { }

  ngOnInit() {
    this.leagueService.getLeagues().subscribe((leagues)=>{this.leagues=leagues})
  }
  delete(league:League):void{
      let title="Delete League:"
      let message=`Do you want to delete ${league.name} league ?`;
      let dialogRef = this.dialog.open(ConferamtionDialogComponent, {
        width: '400px',
        data: { message: message,title:title}
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.leagueService.deleteLeague(league).subscribe(()=>{
            this.leagues=this.leagues.filter(l=>l !==league)
          });
       }
       
      });
  }

}
