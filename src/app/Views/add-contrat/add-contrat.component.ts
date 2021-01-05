import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ConducteurModule } from 'src/app/Models/conducteur/conducteur.module';
import { SocieteModule } from 'src/app/Models/societe/societe.module';
import { VoitureModule } from 'src/app/Models/voiture/voiture.module';
import { ConducteurService } from 'src/app/Service/conducteur.service';
import { ContratService } from 'src/app/Service/contrat.service';
import { SocieteService } from 'src/app/Service/societe.service';
import { VoitureService } from 'src/app/Service/voiture.service';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {
  /*
 numContrat: number;
  dateContrat: Date;
  dateDebutLocation: Date;
  dateFinLocation: Date;
  prixUnitaireJour: number;
  prixTotal: number;
  montantAvance: number;
  dateCreationContrat: Date;
  conducteurs: number[];
  numSociete: number;
  voitures: number[];

  */
  conducteurs: ConducteurModule[];
  societes: SocieteModule[];
  voitures: VoitureModule[];
  constructor(private contratService: ContratService,
              private conducteurService: ConducteurService,
              private societerService: SocieteService,
              private voitureService: VoitureService,
              private submitForm: FormGroup) { }

  ngOnInit(): void {
    this.submitForm = new FormGroup({
      dateContrat: new FormControl('', [Validators.required]),
      dateDebutLocation: new FormControl('', [Validators.required]),
      dateFinLocation: new FormControl('', [Validators.required]),
      prixUnitaireJour: new FormControl('', [Validators.required]),
      prixTotal: new FormControl('', [Validators.required]),
      montantAvance: new FormControl('', [Validators.required]),
      dateCreationContrat: new FormControl('', [Validators.required]),
      conducteurs: new FormControl('', [Validators.required]),
      numSociete: new FormControl('', [Validators.required]),
      voitures: new FormControl('', [Validators.required])
    });
  }
  onSubmit(): void {
    this.contratService.addContrat(this.submitForm.value);
  }


  getAllConducteur(): void {
    this.conducteurService.getListConducteur()
    .subscribe(
      conducteurs => {
        this.conducteurs = conducteurs;
      },
      error => {
        console.log(error);
      });
  }

  getAllSocieters(): void {
    this.societerService.getListSociete()
    .subscribe(
      societes => {
        this.societes = societes;
      },
      error => {
        console.log(error);
      });
  }

  getAllVoitures(): void {
    this.voitureService.getListVoiture()
    .subscribe(
      voitures => {
        this.voitures = voitures;
      },
      error => {
        console.log(error);
      });
  }
}
