import { Component, OnInit } from '@angular/core';
import { Categorie, League } from '../../model/model';
import { SheredService } from '../../services/shered.service';

@Component({
  selector: 'app-gestion-gategorie',
  templateUrl: './gestion-gategorie.component.html',
  styleUrls: ['./gestion-gategorie.component.css']
})
export class GestionGategorieComponent implements OnInit {
  selectedLeague :League;
  categorie : Categorie=new Categorie();
  constructor(private sheredSrevice:SheredService) { }

  ngOnInit() {
   this.selectedLeague=this.sheredSrevice.getSelectedLeague() 
  }

}
