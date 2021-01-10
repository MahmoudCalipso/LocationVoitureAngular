import { Component, OnInit } from '@angular/core';
import { MarqueModule } from 'src/app/Models/marque/marque.module';
import { MarqueService } from 'src/app/Service/marque.service';

@Component({
  selector: 'app-index-marque',
  templateUrl: './index-marque.component.html',
  styleUrls: ['./index-marque.component.css']
})
export class IndexMarqueComponent implements OnInit {
  marques: MarqueModule[];
  constructor(private marqueService: MarqueService) { }

  ngOnInit(): void {
    this.getAllMarque();
  }
  getAllMarque(): void {
    this.marqueService.getListMarque()
      .subscribe(
        data => {
          this.marques = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  delete(id: number) {
    this.marqueService.deleteMarque(id);
    this.getAllMarque();
   }
}
