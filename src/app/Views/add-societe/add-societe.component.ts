import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private societerService: SocieteService,
              private route: ActivatedRoute,
              private router: Router,
              private submitForm: FormGroup) { }

  ngOnInit(): void {
    this.submitForm = new FormGroup({
      nomSociete: new FormControl('', [Validators.required]),
      personnePhysique: new FormControl('', [Validators.required]),
      adresseSociete: new FormControl('', [Validators.required]),
      telSociete: new FormControl('', [Validators.required]),
      mailSociete: new FormControl('', [Validators.required]),
      prenomNomRepresentantSociete: new FormControl('', [Validators.required]),
      telRepresentantSociete: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void{
    this.societerService.addSociete(this.submitForm.value);
    this.router.navigate(['societer']);
  }

}
