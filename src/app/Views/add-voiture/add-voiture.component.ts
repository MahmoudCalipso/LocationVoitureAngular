import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaisonModule } from 'src/app/Models/maison/maison.module';
import { MarqueModule } from 'src/app/Models/marque/marque.module';
import { ModelModule } from 'src/app/Models/model/model.module';
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
  maisons!: MaisonModule[];
  marques!: MarqueModule[];
  models!: ModelModule[];
  submitForm!: FormGroup;
  constructor(private voitureService: VoitureService, private modelService: ModelService,
              private marqueService: MarqueService, private maisonService: MaisonService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.submitForm = this.formBuilder.group({
      datemisecirculation : ['', Validators.required],
      numcartegrise : ['', Validators.required],
      kilometrage : ['', Validators.required],
      matricule : ['', Validators.required],
      model: ['', Validators.required],
      marque: ['', Validators.required],
      maison: ['', Validators.required],
    });
    this.getAllMaisons();
    this.getAllMarques();
    this.getAllModels();
  }

  onSubmit(): void {
    this.voitureService.addVoiture(this.submitForm.value).subscribe(res => {
      console.log('Conducteur created successfully!');
      this.router.navigate(['voiture']);
    });
  }

   getAllMaisons(): void {
    this.maisonService.getListMaison().subscribe(
      dataMaison => {
        this.maisons = dataMaison;
      },
      error => {
        console.log(error);
      });
  }

  getAllMarques(): void {
    this.marqueService.getListMarque().subscribe(
      dataMarque => {
        this.marques = dataMarque;
      },
      error => {
        console.log(error);
      });
  }

  getAllModels(): void {
    this.modelService.getListModel().subscribe(
      data => {
        this.models = data;
      },
      error => {
        console.log(error);
      });
  }



}
