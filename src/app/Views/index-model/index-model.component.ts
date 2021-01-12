import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelModule } from 'src/app/Models/model/model.module';
import { ModelService } from 'src/app/Service/model.service';

@Component({
  selector: 'app-index-model',
  templateUrl: './index-model.component.html',
  styleUrls: ['./index-model.component.css']
})
export class IndexModelComponent implements OnInit {
  models: ModelModule[];
  constructor(private modelService: ModelService, private router: Router) { }

  ngOnInit(): void {
    this.getAllModel();
  }
  getAllModel(): void {
    this.modelService.getListModel()
      .subscribe(
        data => {
          this.models = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  delete(id: number): void{
    this.modelService.deleteModel(id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['conducteur']);
      },
      error => {
        console.log(error);
      });
  }
}
