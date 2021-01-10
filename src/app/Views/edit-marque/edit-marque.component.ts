import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaisonService } from 'src/app/Service/maison.service';
import { MarqueService } from 'src/app/Service/marque.service';

@Component({
  selector: 'app-edit-marque',
  templateUrl: './edit-marque.component.html',
  styleUrls: ['./edit-marque.component.css']
})
export class EditMarqueComponent implements OnInit {

  submitForm!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  maisons: any[];
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private marqueService: MarqueService,
              private maisonSerivce: MaisonService

  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.submitForm = this.formBuilder.group({
      nomMarque: ['', Validators.required],
      maison: ['', Validators.required]
    });
    if (!this.isAddMode) {
      // tslint:disable-next-line: radix
      this.marqueService.getMarques(parseInt(this.id)).subscribe(x => this.submitForm.patchValue(x));
    }
  }

  onSubmit(): any {
    this.marqueService.editeMarque(this.id, this.submitForm.value).subscribe(() => {
      console.log('Marque Modifier');
    }).add(() => this.loading = false);
    this.router.navigate(['marque']);
  }
  getAllMaison(): void {
    this.maisonSerivce.getListMaison()
    .subscribe(
      maisons => {
        this.maisons = maisons;
      },
      error => {
        console.log(error);
      });
  }

}
