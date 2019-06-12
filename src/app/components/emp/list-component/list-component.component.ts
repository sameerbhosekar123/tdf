import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.sass']
})
export class ListComponentComponent implements OnInit, AfterViewInit {
  getURL = environment.baseURI + environment.getURI;
  deleteURI = environment.baseURI + environment.deleteURI;
  empData:any;

  constructor(private api:ApiService) { }

  getAllList(){
    this.api.get(this.getURL).subscribe(r=>{
      if(r){
        this.empData = r;
      }
    },err => {
      console.log("error in geting list");
    })
  }

  delete(val,name) {
    if (confirm("Are you sure to delete " + name)) {
      this.api.get(this.deleteURI+'/'+val).subscribe(d => {
        console.log("Success Deleted ID", d);
        this.getAllList();
      }, err => {
        console.log('Error: ', err);
      });
    }
  }

  ngAfterViewInit() {
    this.getAllList();
  }
  
  ngOnInit() {
  }
}
