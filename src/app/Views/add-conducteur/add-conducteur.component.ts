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
      mailConducteur: ['', Validators.compose([Validators.required, Validators.email])],
      dateCreationConducteur: ['', Validators.required]
    });
  }

  onSubmit(): void{
    // tslint:disable-next-line: deprecation
    this.conducteurService.addConducteur(this.submitform.value).subscribe(res => {
      console.log('Conducteur created successfully!');
      this.router.navigate(['conducteur']);
    });
  }


}
