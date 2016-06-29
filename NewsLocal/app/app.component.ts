import { Component } from '@angular/core';
export class News{
    id:number;
titre:string;
url:string;
}
const ListeNews:News[]=[
    {id:1,titre:"Le Brexit c'est fantastique",url:"http://facebook.com"},
    {id:2,titre:"Angular c'est le bazard",url:"http://angular.com"},
    {id:3,titre:"Renaud à l'olympia",url:"http://dhnet.com"}
    
];

@Component({
  selector: 'my-app',
  templateUrl:'app/pages/news.html'
})


export class AppComponent { 
    title="Ma page de news";
    listeNews = ListeNews;
    
}