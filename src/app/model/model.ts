export class League{
    id:number;
    name:string;
    address:string;
    description:string;
    image:Image;
    clubes:Clube[];
    categorie:Categorie[];
}
export class Clube{
   id:number;
   name:string;
   league:League;
   teams:Team[];
}
export class Team{
 id:number;
 name:string;
 cluble:Clube;
}
export class Competition{
 id:number;
 name:string;
 league:League;
 categorie:Categorie;
 Matchs:Match[];
}
export class Match{
    id:number;
    localTeam:Team;
    visiteuseTeam:Team;
    competition:Competition;
}
export class Categorie{
    id:number;
    name:string;
    description:string;
    leagueId:number;
}
export class Image{
    id :number;
    name:string;
    imageUri:string;
    constructor(id?:number){

    }

}