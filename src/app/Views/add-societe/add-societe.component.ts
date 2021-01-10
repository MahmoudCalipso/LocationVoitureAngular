import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocieteService } from 'src/app/Service/societe.service';

@Component({
  selector: 'app-add-societe',
  templateUrl: './add-societe.component.html',
  styleUrls: ['./add-societe.component.css']
})
export class AddSocieteComponent implements OnInit {
   /*
     numSociete: number;
  nomSociete: string;
  personnePhysique: boolean;
  adresseSociete: string;
  telSociete: string;
  mailSociete: string;
  prenomNomRepresentantSociete: string;
  telRepresentantSociete: string;
  dateCreationSociete: Date;
   */
  submitForm!: FormGroup;
  constructor(private societerService: SocieteService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.submitForm = this.formBuilder.group({
      nomSociete: ['', Validators.required],
      personnePhysique: ['', Validators.required],
      adresseSociete: ['', Validators.required],
      telSociete: ['', Validators.required],
      mailSociete: ['', Validators.required],
      prenomNomRepresentantSociete: ['', Validators.required],
      telRepresentantSociete: ['', Validators.required]
    });

  }

  onSubmit(): void{
    this.societerService.addSociete(this.submitForm.value).subscribe(res => {
      console.log('Societer created successfully!');
      this.router.navigate(['societe']);
    });
  }
 /* getDate(){
    return new Date().toISOString().substring(0, 10);
  }
  */


}
