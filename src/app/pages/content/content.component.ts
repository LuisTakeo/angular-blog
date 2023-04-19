import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  contentCover:string = "https://nerdhits.com.br/wp-content/uploads/2023/03/one-piece-shanks-e-barba-branca-dividem-o-ceu.jpg";
  contentTitle:string = "Noticia";
  contentDescription:string = "Conteudo da noticia";
  private id:string | null = "0";

  constructor(private route:ActivatedRoute){

  }

  ngOnInit():void{
    this.route.paramMap.subscribe(value => this.id = value.get("id"))
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.contentCover = result.photo;

  }

}
