import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LeagueService } from '../../services/ligue.service';
import { MatDialog } from '@angular/material';
import { League,Image } from '../../model/model';
import { ConferamtionDialogComponent } from '../../popups/conferamtion-dialog/conferamtion-dialog.component';
import { FilesService } from '../../services/files.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-gestion-ligues',
  templateUrl: './gestion-ligues.component.html',
  styleUrls: ['./gestion-ligues.component.css']
})
export class GestionLiguesComponent implements OnInit {
  league:League=new League;
  image:Image;
  message:string;
  title:string;
  mode:string;
  stat : boolean = false;
  
  constructor(private route: ActivatedRoute , private location:Location,private leagueService:LeagueService,private fileService:FilesService,public dialog: MatDialog) { }
  save(){
   if(this.mode==="new")this.openNewLeagueDialog();
   else this.openUpdateLeagueDialog();
  }
  
  openNewLeagueDialog(): void {
    let dialogRef = this.dialog.open(ConferamtionDialogComponent, {
      width: '400px',
      data: { message: this.message,title:this.title}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.leagueService.addLeague(this.league).subscribe(l => this.league=l)
     } 
     this.goBack();
    }); 
  }
  openUpdateLeagueDialog(): void {
   
    let dialogRef = this.dialog.open(ConferamtionDialogComponent, {
      width: '400px',
      data: { message: this.message,title:this.title}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.leagueService.updateLeague(this.league).subscribe(l => this.league=l)
     } 
     this.goBack();
    }); 
  }
  private setLogo(event){
   if(event.body != -1){
   this.fileService.getImage(event.body).subscribe(i=>{
     this.image=i;
     this.league.image=this.image;
   console.log(this.league.image.id);
  });
   }
  }
  
  goBack(): void {
      this.location.back();
  }
  ngOnInit() {
  this.getLeague();
  }
  getLeague(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if(id){
    this.mode="update";
    this.title="Update League"
    this.message="Do you want to save the changes for this league?";
    this.leagueService.getLeague(id)
      .subscribe(l => {this.league = l; this.image=this.league.image;});
    }else{
      this.mode="new";
      this.title="Add New League"
      this.message="Do you want to add this league?";
      this.image=new Image();
    }
  }
}
