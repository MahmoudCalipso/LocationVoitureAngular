import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConducteurService } from 'src/app/Service/conducteur.service';

@Component({
  selector: 'app-add-conducteur',
  templateUrl: './add-conducteur.component.html',
  styleUrls: ['./add-conducteur.component.css']
})
export class AddConducteurComponent implements OnInit {
  /*
      codeConducteur: number;
  prenomNomConducteur: string;
  dateNaissance: Date;
  numPermisConduite: string;
  dateLivraisonPermisConduite: Date;
  dateFinValidite: Date;
  adresse: string;
  tel: string;
  numCIN: string;
  dateCin: Date;
  mailConducteur: string;
  dateCreationConducteur: Date;
  */
  constructor(private conducteurService: ConducteurService,
              private router: Router, private submitform: FormGroup) { }

  ngOnInit(): void {
    this.submitform = new FormGroup({
      prenomNomConducteur: new FormControl('', [Validators.required]),
      dateNaissance: new FormControl('', [Validators.required]),
      numPermisConduite: new FormControl('', [Validators.required]),
      dateLivraisonPermisConduite: new FormControl('', [Validators.required]),
      dateFinValidite: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      tel: new FormControl('', [Validators.required]),
      numCIN: new FormControl('', [Validators.required]),
      dateCin: new FormControl('', [Validators.required]),
      mailConducteur: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void{
    this.conducteurService.addConducteur(this.submitform.value);
   // this.router.navigate(['conducteur']);
  }

}
