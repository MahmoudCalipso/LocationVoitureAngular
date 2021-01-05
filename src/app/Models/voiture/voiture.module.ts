import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule as Model} from '../model/model.module';
import { MarqueModule as Marque} from '../marque/marque.module';
import { MaisonModule as Maison } from '../maison/maison.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class VoitureModule {
  idVoiture: number;
  datemisecirculation: string;
  numcartegrise: number;
  kilometrage: number;
  matricule: string;
  codeModel: number;
  model: Model [];
  codeMarque: number;
  marque: Marque[];
  codeMaison: number;
  maison: Maison[];
}
