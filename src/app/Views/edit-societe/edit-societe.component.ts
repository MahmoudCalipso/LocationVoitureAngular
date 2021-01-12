import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocieteModule } from 'src/app/Models/societe/societe.module';
import { SocieteService } from 'src/app/Service/societe.service';

@Component({
  selector: 'app-edit-societe',
  templateUrl: './edit-societe.component.html',
  styleUrls: ['./edit-societe.component.css']
})
export class EditSocieteComponent implements OnInit {

  submitForm!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  societer: SocieteModule[];
  constructor(private societerService: SocieteService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.submitForm = this.formBuilder.group({
      nomSociete: ['', Validators.required],
      personnePhysique: ['', Validators.required],
      adresseSociete: ['', Validators.required],
      telSociete: ['', Validators.required],
      mailSociete: ['', Validators.required],
      prenomNomRepresentantSociete: ['', Validators.required],
      telRepresentantSociete: ['', Validators.required]
    });
    if (!this.isAddMode) {
      // tslint:disable-next-line: radix
      this.societerService.getSocietes(parseInt(this.id)).subscribe(
        data => {
          this.societer = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    }
  }

  onSubmit(): any {
    this.societerService.editeSociete(this.id, this.submitForm.value).subscribe(() => {
      console.log('Societer Modifier');
      this.router.navigate(['societer']);
    }).add(() => this.loading = false);
  }

}
