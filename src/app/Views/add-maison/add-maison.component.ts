import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaisonService } from 'src/app/Service/maison.service';

@Component({
  selector: 'app-add-maison',
  templateUrl: './add-maison.component.html',
  styleUrls: ['./add-maison.component.css']
})
export class AddMaisonComponent implements OnInit {
  submitForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private maisonService: MaisonService
  ) {}

  ngOnInit(): void {
    this.submitForm = this.formBuilder.group({
      nomMaison: ['', Validators.required]
    });
  }

  onSubmit(): any {
    this.maisonService.addMaison(this.submitForm.value)
    .subscribe(res => {
      console.log('Maison added successfully!');
      this.router.navigate(['maison']);
      }, (err) => {
        console.log(err);
    });

  }

}
