import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  conducteurs: ConducteurModule[];
  societes: SocieteModule[];
  voitures: VoitureModule[];
  submitForm!: FormGroup;
  constructor(private contratService: ContratService,
              private conducteurService: ConducteurService,
              private societerService: SocieteService,
              private voitureService: VoitureService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.submitForm = this.formBuilder.group({
      dateContrat: ['', Validators.required],
      dateDebutLocation: ['', Validators.required],
      dateFinLocation: ['', Validators.required],
      prixUnitaireJour: ['', Validators.required],
      prixTotal: ['', Validators.required],
      montantAvance: ['', Validators.required],
      conducteurs: ['', Validators.required],
      societe: ['', Validators.required],
      voitures: ['', Validators.required]
    });
    this.getAllConducteur();
    this.getAllSocieters();
    this.getAllVoitures();
  }
  onSubmit(): void {
    this.contratService.addContrat(this.submitForm.value).subscribe(res => {
      console.log('Conducteur created successfully!');
      this.router.navigate(['contrat']);
    });

  }


  async getAllConducteur(): Promise<void> {
   await  this.conducteurService.getListConducteur()
    .subscribe(
      data => {
        this.conducteurs = data;
      },
      error => {
        console.log(error);
      });
  }

  getAllSocieters(): void {
    this.societerService.getListSociete()
    .subscribe(
      data => {
        this.societes = data;
      },
      error => {
        console.log(error);
      });
  }

  getAllVoitures(): void {
    this.voitureService.getListVoiture()
    .subscribe(
      data => {
        this.voitures = data;
      },
      error => {
        console.log(error);
      });
  }
}
