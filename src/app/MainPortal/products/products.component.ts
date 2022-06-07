import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/SharedPortal/Services/data-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  MyDataArray: any = [];


  constructor(private _DataService: DataServiceService) { }

  ngOnInit(): void {
    this.GetDataForMyComponent();
  }

  GetDataForMyComponent() {
    this.MyDataArray = this._DataService.GetData();

  }


}
