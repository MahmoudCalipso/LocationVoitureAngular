import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class SocieteModule {
  numSociete: number;
  nomSociete: string;
  personnePhysique: boolean;
  adresseSociete: string;
  telSociete: string;
  mailSociete: string;
  prenomNomRepresentantSociete: string;
  telRepresentantSociete: string;
  dateCreationSociete: Date;
 }
