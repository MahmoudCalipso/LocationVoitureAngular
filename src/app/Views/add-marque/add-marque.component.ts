import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MaisonModule } from 'src/app/Models/maison/maison.module';
import { MaisonService } from 'src/app/Service/maison.service';
import { MarqueService } from 'src/app/Service/marque.service';

@Component({
  selector: 'app-add-marque',
  templateUrl: './add-marque.component.html',
  styleUrls: ['./add-marque.component.css']
})
export class AddMarqueComponent implements OnInit {
  submitForm!: FormGroup;
  maisons: MaisonModule[];

  constructor(private marqueService: MarqueService,
              private maisonService: MaisonService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.submitForm = this.formBuilder.group({
      nomMarque: ['', Validators.required],
      maison: ['', Validators.required]
    });
    this.getAllMaison();
  }

  onSubmit(): void{
    this.marqueService.addMarque(this.submitForm.value);
    this.router.navigate(['marque']);
  }
  resetForm(): void{
    this.submitForm.reset();
  }

  getAllMaison(): void {
    this.maisonService.getListMaison()
    .subscribe((data: any[])=>{
      this.maisons = data;
    });
  }
  /*get nomMarque(): any{
    return this.submitForm.get('nomMarque');
  }
  get codeMaison():any{
    return this.submitForm.get('codeMaison');
  }*/
}
