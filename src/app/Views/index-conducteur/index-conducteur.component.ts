import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConducteurModule } from 'src/app/Models/conducteur/conducteur.module';
import { ConducteurService } from 'src/app/Service/conducteur.service';

@Component({
  selector: 'app-index-conducteur',
  templateUrl: './index-conducteur.component.html',
  styleUrls: ['./index-conducteur.component.css']
})
export class IndexConducteurComponent implements OnInit {
  conducteurs: ConducteurModule[];
  constructor(private conducteurService: ConducteurService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllConducteur();
  }
  getAllConducteur(): void {
    this.conducteurService.getListConducteur()
      .subscribe(
        data => {
          this.conducteurs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  delete(id: number): void{
    this.conducteurService.deleteConducteur(id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['conducteur']);
      },
      error => {
        console.log(error);
      });
  }

}
