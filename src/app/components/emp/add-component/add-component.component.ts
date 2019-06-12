import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserDetails } from '../../../UserDetails';
import { environment } from '../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.sass']
})
export class AddComponentComponent implements OnInit {
  addURI=environment.baseURI + environment.addURI;
  getURI = environment.baseURI + environment.getURI;
  putURI = environment.baseURI + '/update';
  submitted = false;
  user = new UserDetails('','','');
  id:any;

  constructor(private api:ApiService, private router: Router, private activateRoute:ActivatedRoute) { }

  onSubmit() { 
    this.submitted = true; 
    if(this.id != 0 || isNaN(this.id)){
      this.edit();
      return;
    }
    this.create();
  }

  edit(){
    this.api.post(this.putURI,this.user).subscribe(response => {
      console.log("success updated");
      this.router.navigate(['/']);
    },err => {
      console.log("error in adding",err);
    });
  }

  create() {
    this.api.post(this.addURI,this.user).subscribe(response => {
      console.log("success added");
      this.router.navigate(['/']);
    },err => {
      console.log("error in adding",err);
    });
  }

  getDetails(id) {
    this.api.get(this.getURI+'/'+id).subscribe(r=>{
      this.user = r[0];
      console.log("record found");
      console.log(r);
    },err => {
      console.log("Error in getting particular record for emp");
    });
  }
title:string;
  ngOnInit() {
    this.id = parseInt(this.activateRoute.snapshot.paramMap.get('id'));
    console.log(this.id);
    if(!isNaN(this.id)){
      this.title="edit";
      this.getDetails(this.id);
    }
  }

}
