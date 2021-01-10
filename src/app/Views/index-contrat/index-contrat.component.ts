import { Component, OnInit } from '@angular/core';
import { ContratModule } from 'src/app/Models/contrat/contrat.module';
import { ContratService } from 'src/app/Service/contrat.service';

@Component({
  selector: 'app-index-contrat',
  templateUrl: './index-contrat.component.html',
  styleUrls: ['./index-contrat.component.css']
})
export class IndexContratComponent implements OnInit {
  contrats: ContratModule[];
  constructor(private contratService: ContratService) { }

  ngOnInit(): void {
    this.getAllContrat();
  }
  getAllContrat(): void {
    this.contratService.getListContrat()
      .subscribe(
        data => {
          this.contrats = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  delete(id: number) {
    this.contratService.deleteContrat(id);
    this.getAllContrat();
   }
}
