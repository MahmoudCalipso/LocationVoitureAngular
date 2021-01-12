import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratModule } from '../contrat/contrat.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ConducteurModule {
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
}
