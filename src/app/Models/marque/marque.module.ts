import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaisonModule as Maison } from '../maison/maison.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class MarqueModule{
  codeMarque: number;
  nomMarque: string;
  maison: Maison[];

}
