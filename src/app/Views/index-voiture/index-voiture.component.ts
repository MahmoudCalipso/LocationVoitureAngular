import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoitureModule } from 'src/app/Models/voiture/voiture.module';
import { VoitureService } from 'src/app/Service/voiture.service';

@Component({
  selector: 'app-index-voiture',
  templateUrl: './index-voiture.component.html',
  styleUrls: ['./index-voiture.component.css']
})
export class IndexVoitureComponent implements OnInit {
  voitures: VoitureModule[];
  constructor(private voitureService: VoitureService , private router: Router) { }

  ngOnInit(): void {
    this.getAllVoiture();
  }
  getAllVoiture(): void {
    this.voitureService.getListVoiture()
      .subscribe(
        data => {
          this.voitures = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  delete(id: number): void{
    this.voitureService.deleteVoiture(id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['voiture']);
      },
      error => {
        console.log(error);
      });
  }
}
