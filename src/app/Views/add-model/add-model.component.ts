import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelService } from 'src/app/Service/model.service';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {
  submitForm!: FormGroup;
  constructor(private modeleService: ModelService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder
              ) { }

  ngOnInit(): void {
    this.submitForm = this.formBuilder.group({
      nom_model: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.modeleService.addModel(this.submitForm.value);
    this.router.navigate(['model']);
  }

}
