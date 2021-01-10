import { Component, OnInit } from '@angular/core';
import { SocieteModule } from 'src/app/Models/societe/societe.module';
import { SocieteService } from 'src/app/Service/societe.service';

@Component({
  selector: 'app-index-societe',
  templateUrl: './index-societe.component.html',
  styleUrls: ['./index-societe.component.css']
})
export class IndexSocieteComponent implements OnInit {
  societes: SocieteModule[];
  constructor(private societeService: SocieteService) { }

  ngOnInit(): void {
    this.getAllSociete();
  }
  getAllSociete(): void {
    this.societeService.getListSociete()
      .subscribe(
        data => {
          this.societes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  delete(id: number) {
    this.societeService.deleteSociete(id);
    this.getAllSociete();
   }
}
