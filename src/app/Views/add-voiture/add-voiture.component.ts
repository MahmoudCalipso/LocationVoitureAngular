import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaisonService } from 'src/app/Service/maison.service';
import { MarqueService } from 'src/app/Service/marque.service';
import { ModelService } from 'src/app/Service/model.service';
import { VoitureService } from 'src/app/Service/voiture.service';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent implements OnInit {
  maisons!: any[];
  marques!: any[];
  models!: any[];
  constructor(private voitureService: VoitureService, private modelService: ModelService,
              private marqueService: MarqueService, private maisonService: MaisonService,
              private route: ActivatedRoute,
              private router: Router,
              private submitForm: FormGroup
  ) { }

  ngOnInit(): void {
    this.submitForm = new FormGroup({
      datemisecirculation : new FormControl('', [Validators.required]),
      numcartegrise : new FormControl('', [Validators.required]),
      kilometrage : new FormControl('', [Validators.required]),
      matricule : new FormControl('', [Validators.required]),
      codeModel : new FormControl('', [Validators.required]),
      codeMarque : new FormControl('', [Validators.required]),
      codeMaison : new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    this.voitureService.addVoiture(this.submitForm.value);
    this.router.navigate(['voiture']);
  }

  getAllMaisons(): void {
    this.maisonService.getListMaison()
    .subscribe(
      maisons => {
        this.maisons = maisons;
      },
      error => {
        console.log(error);
      });
  }

  getAllMarques(): void {
    this.marqueService.getListMarque()
    .subscribe(
      marques => {
        this.marques = marques;
      },
      error => {
        console.log(error);
      });
  }

  getAllModels(): void {
    this.modelService.getListModel()
    .subscribe(
      models => {
        this.models = models;
      },
      error => {
        console.log(error);
      });
  }



}
