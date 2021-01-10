import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelService } from 'src/app/Service/model.service';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {
  submitForm!: FormGroup;
  constructor(private modeleService: ModelService,
              private router: Router,
              private formBuilder: FormBuilder
              ) { }

  ngOnInit(): void {
    this.submitForm = this.formBuilder.group({
      nomModel: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.modeleService.addModel(this.submitForm.value);
    this.router.navigate(['model']);
  }
 /* get nomModel(): any{
    return this.submitForm.get('nomModel');
  }*/

}
