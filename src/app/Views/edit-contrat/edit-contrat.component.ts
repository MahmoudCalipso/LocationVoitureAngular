import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConducteurModule } from 'src/app/Models/conducteur/conducteur.module';
import { SocieteModule } from 'src/app/Models/societe/societe.module';
import { VoitureModule } from 'src/app/Models/voiture/voiture.module';
import { ConducteurService } from 'src/app/Service/conducteur.service';
import { ContratService } from 'src/app/Service/contrat.service';
import { SocieteService } from 'src/app/Service/societe.service';
import { VoitureService } from 'src/app/Service/voiture.service';

@Component({
  selector: 'app-edit-contrat',
  templateUrl: './edit-contrat.component.html',
  styleUrls: ['./edit-contrat.component.css']
})
export class EditContratComponent implements OnInit {
  submitForm!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  conducteurs: ConducteurModule[];
  societes: SocieteModule[];
  voitures: VoitureModule[];
  constructor( private formBuilder: FormBuilder,
               private route: ActivatedRoute,
               private router: Router,
               private contratService: ContratService,
               private conducteurService: ConducteurService,
               private societerService: SocieteService,
               private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.submitForm = this.formBuilder.group({
      dateContrat: ['', Validators.required],
      dateDebutLocation: ['', Validators.required],
      dateFinLocation: ['', Validators.required],
      prixUnitaireJour: ['', Validators.required],
      prixTotal: ['', Validators.required],
      montantAvance: ['', Validators.required],
      dateCreationContrat: ['', Validators.required],
      conducteurs: ['', Validators.required],
      numSociete: ['', Validators.required],
      voitures: ['', Validators.required]
    });
    if (!this.isAddMode) {
      // tslint:disable-next-line: radix
      this.contratService.getContrats(parseInt(this.id)).subscribe(x => this.submitForm.patchValue(x));
    }
  }
  onSubmit(): void {
    this.contratService.editeContrat(this.id, this.submitForm.value).subscribe(() => {
      this.router.navigate(['conducteur'], { relativeTo: this.route });
    });
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
