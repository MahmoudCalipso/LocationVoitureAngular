import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocieteModule } from 'src/app/Models/societe/societe.module';
import { SocieteService } from 'src/app/Service/societe.service';

@Component({
  selector: 'app-index-societe',
  templateUrl: './index-societe.component.html',
  styleUrls: ['./index-societe.component.css']
})
export class IndexSocieteComponent implements OnInit {
  societes: SocieteModule[];
  constructor(private societeService: SocieteService, private router: Router) { }

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
  delete(id: number): void{
    this.societeService.deleteSociete(id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['societe']);
      },
      error => {
        console.log(error);
      });
  }
}
