import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  submitform!: FormGroup;
  constructor(
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private conducteurService: ConducteurService) {
    }

  ngOnInit(): void {
    this.submitform = this.formBuilder.group({
      prenomNomConducteur:  ['', Validators.required],
      dateNaissance: ['', Validators.required],
      numPermisConduite: ['', Validators.required],
      dateLivraisonPermisConduite: ['', Validators.required],
      dateFinValidite: ['', Validators.required],
      adresse: ['', Validators.required],
      tel: ['', Validators.required],
      numCIN: ['', Validators.required],
      dateCin: ['', Validators.required],
      mailConducteur: ['', Validators.required, Validators.email],
      dateCreationConducteur: ['', Validators.required, Validators.email],

    });
  }

  onSubmit(): void{
    this.conducteurService.addConducteur(this.submitform.value)
      .subscribe(() => {
        this.router.navigate(['conducteur'], { relativeTo: this.route });
      });
   
  }

  get f() { return this.submitform.controls; }

}
