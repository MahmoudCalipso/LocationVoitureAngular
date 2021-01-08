import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaisonService } from 'src/app/Service/maison.service';

@Component({
  selector: 'app-edit-maison',
  templateUrl: './edit-maison.component.html',
  styleUrls: ['./edit-maison.component.css']
})
export class EditMaisonComponent implements OnInit {

  submitForm!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private maisonService: MaisonService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.submitForm = this.formBuilder.group({
      nomMaison: ['', Validators.required],
    });
    if (!this.isAddMode) {
      // tslint:disable-next-line: radix
      this.maisonService.getMaisons(parseInt(this.id)).subscribe(x => this.submitForm.patchValue(x));
    }
  }

  onSubmit(): any {
    this.maisonService.editeMaison(this.id, this.submitForm.value).subscribe(() => {
      this.router.navigate(['maison'], { relativeTo: this.route });
  }).add(() => this.loading = false);
  }

}
