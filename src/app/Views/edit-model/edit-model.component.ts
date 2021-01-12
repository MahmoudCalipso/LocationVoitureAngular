import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelModule } from 'src/app/Models/model/model.module';
import { ModelService } from 'src/app/Service/model.service';

@Component({
  selector: 'app-edit-model',
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.css']
})
export class EditModelComponent implements OnInit {

  submitForm!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  model: ModelModule[];
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private modelService: ModelService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.submitForm = this.formBuilder.group({
      nomMarque: ['', Validators.required],
      codeMaison: ['', Validators.required]
    });
    if (!this.isAddMode) {
      // tslint:disable-next-line: radix
      this.modelService.getModels(parseInt(this.id)).subscribe(
        data => {
          this.model = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
    }
  }

  onSubmit(): any {
    this.modelService.editeModel(this.id, this.submitForm.value).subscribe(() => {
      console.log('Model Modifier');
      this.router.navigate(['model']);
    }).add(() => this.loading = false);

  }

}
