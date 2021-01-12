import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureModule } from 'src/app/Models/voiture/voiture.module';
import { MaisonService } from 'src/app/Service/maison.service';
import { MarqueService } from 'src/app/Service/marque.service';
import { ModelService } from 'src/app/Service/model.service';
import { VoitureService } from 'src/app/Service/voiture.service';

@Component({
  selector: 'app-edit-voiture',
  templateUrl: './edit-voiture.component.html',
  styleUrls: ['./edit-voiture.component.css']
})
export class EditVoitureComponent implements OnInit {

  maisons!: any[];
  marques!: any[];
  models!: any[];

  voiture: VoitureModule[];
  submitForm!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  constructor(private voitureService: VoitureService, private modelService: ModelService,
              private marqueService: MarqueService, private maisonService: MaisonService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.submitForm = this.formBuilder.group({
      datemisecirculation : ['', Validators.required],
      numcartegrise : ['', Validators.required],
      kilometrage : ['', Validators.required],
      matricule : ['', Validators.required],
      model: ['', Validators.required],
      marque: ['', Validators.required],
      maison: ['', Validators.required],
    });
    if (!this.isAddMode) {
      // tslint:disable-next-line: radix
      this.voitureService.getVoitures(parseInt(this.id)).subscribe(
        data => {
          this.voiture = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    }
    this.getAllMaisons();
    this.getAllMarques();
    this.getAllModels();
  }

  onSubmit(): any {
    this.voitureService.editeVoiture(this.id, this.submitForm.value).subscribe(() => {
      console.log('Conducteur Modifier');
      this.router.navigate(['voiture']);
    }).add(() => this.loading = false);
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
