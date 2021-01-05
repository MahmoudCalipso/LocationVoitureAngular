import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConducteurModule as Conducteur } from '../conducteur/conducteur.module';
import { VoitureModule as Voiture} from '../voiture/voiture.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class ContratModule {
  numContrat: number;
  dateContrat: Date;
  dateDebutLocation: Date;
  dateFinLocation: Date;
  prixUnitaireJour: number;
  prixTotal: number;
  montantAvance: number;
  dateCreationContrat: Date;
  codeConducteur: number[];
  conducteur: Conducteur[];
  numSociete: number;

  idVoiture: number[];
  voiture: Voiture[];

 }
