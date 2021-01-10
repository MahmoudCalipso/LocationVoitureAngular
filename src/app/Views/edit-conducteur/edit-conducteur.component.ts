import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConducteurService } from 'src/app/Service/conducteur.service';

@Component({
  selector: 'app-edit-conducteur',
  templateUrl: './edit-conducteur.component.html',
  styleUrls: ['./edit-conducteur.component.css']
})
export class EditConducteurComponent implements OnInit {
  submitform!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  constructor( private formBuilder: FormBuilder,
               private route: ActivatedRoute,
               private router: Router,
               private conducteurService: ConducteurService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
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
      dateCreationConducteur: ['', Validators.required],

    });
    if (!this.isAddMode) {
      // tslint:disable-next-line: radix
      this.conducteurService.getConducteurs(parseInt(this.id)).subscribe(x => this.submitform.patchValue(x));
    }
  }
  onSubmit(): void {
    this.conducteurService.editeConducteur(this.id, this.submitform.value).subscribe(() => {
      console.log('Conducteur Modifier');
    }).add(() => this.loading = false);
    this.router.navigate(['conducteur']);
  }

}
