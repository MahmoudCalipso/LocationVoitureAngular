import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Deserializable } from '../deserializable';
import { MaisonModule as Maison } from '../maison/maison.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class MarqueModule implements Deserializable{
  codeMarque: number;
  nomMarque: string;
  codeMaison: number;
  maison: Maison[];
}
