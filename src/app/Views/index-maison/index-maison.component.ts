import { Component, OnInit } from '@angular/core';
import { MaisonModule } from 'src/app/Models/maison/maison.module';
import { MaisonService } from 'src/app/Service/maison.service';


@Component({
  selector: 'app-index-maison',
  templateUrl: './index-maison.component.html',
  styleUrls: ['./index-maison.component.css']
})
export class IndexMaisonComponent implements OnInit {
  maisons: MaisonModule[];
  constructor(private maisonService: MaisonService) { }

  ngOnInit(): void {
    this.getAllMaison();
  }
  getAllMaison(): void {
    this.maisonService.getListMaison()
      .subscribe(
        data => {
          this.maisons = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  delete(id: number) {
    this.maisonService.deleteMaison(id);
    this.getAllMaison();
   }
}
