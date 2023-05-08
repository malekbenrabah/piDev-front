import { Component, OnInit, ViewChild } from '@angular/core';
import mapdata from '../../../../data/mapdata.json';
import 'leaflet';
import { PropertyService } from 'src/app/shared/properties/property.service';
import { PropertiesService } from 'src/app/shared/properties/properties.service';
import { TypeAd, advertisement } from 'src/app/shared/model/advertisement';
import { Type } from 'src/app/shared/model/property';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

import { NgxDropzoneComponent } from 'ngx-dropzone';
import { Router } from '@angular/router';


//declare let L;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  //FormGroup 
  myFormGroup :FormGroup;

  //files control 
  myDropZoneControl: FormControl;

  regions = {
    tunis: ['Tunis', 'Ariana', 'Ben Arous'],
    sousse: ['Sousse', 'Monastir', 'Mahdia'],
    sfax: ['Sfax', 'Gabes', 'Medenine']
  };
 
  filteredCities = [];

  onRegionChange() {
    const region = this.myFormGroup.get('region').value;
    this.filteredCities = this.regions[region] || [];
    this.myFormGroup.get('ville').setValue('');
  }
  typeAds=Object.values(TypeAd);
  types = Object.values(Type);

  constructor(private fb:FormBuilder, private propertyService:PropertyService, private router:Router) { 
    this.myDropZoneControl = new FormControl('', [Validators.required]);
    this.myFormGroup=this.fb.group({
      title: ['', Validators.required],
      typeAd: ['', Validators.required],
      type:['',Validators.required],
      price: ['', Validators.required],
      size: ['', Validators.required],
      rooms: ['', Validators.required],
      description: [''],
      region:['', Validators.required],
      ville:['', Validators.required],
      myDropZone: this.myDropZoneControl
    });
    this.autoDescription();
    console.log('auto description set up');
  }

  autoDescription(): void {
    this.myFormGroup.valueChanges.subscribe((value: any) => {
      const description = this.getDescription(value);
      this.myFormGroup.controls['description'].setValue(description, {emitEvent: false});
    });
    console.log('auto description on');
  }
  
  getDescription(value: any): string {
    if (value.title || value.typeAd || value.type || value.size) {
      return `${value.title} : This ${value.typeAd} ${value.type} with ${value.size} sqft has ${value.rooms} rooms.`;
    } else {
      return '';
    }
  }

  files: File[] = [];

	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
    console.log("selected files"+this.files.map(file => file.name));
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
  }
  
  /* SUBMIT LISTING
  onSubmit(){
    
    
    if (this.myFormGroup.valid && this.myDropZoneControl.value.length > 0) {
      
      console.log(this.myFormGroup.value,'OnSubmit');
      console.log(this.files,'files onSubmit submit');
      const parking:boolean=true;
      const yardSpace:number=5;
      const garage:boolean=true;

      const formData= new FormData();
      formData.append('title','aaaaaa');
      formData.append('price', this.myFormGroup.value.price);
      formData.append('description', this.myFormGroup.value.description);
      formData.append('typeAd', this.myFormGroup.value.typeAd);
      formData.append('size', this.myFormGroup.value.size);
      formData.append('type', this.myFormGroup.value.type);
      formData.append('rooms', this.myFormGroup.value.type);
      formData.append('parking',parking.toString());
      formData.append('yardSpace', yardSpace.toString());
      formData.append('garage',garage.toString());
      formData.append('region', this.myFormGroup.value.region);
      formData.append('ville', this.myFormGroup.value.ville);
      if (this.files) {
        for (let i = 0; i < this.files.length; i++) {
          formData.append('photo', this.files[i].name);
        }
        
      }else{
        formData.append('photo','');
      }
      console.log(formData , ' FROM DATA');
      console.log(formData.get('title'), ' title from fromdata');
      formData.forEach((value, key) => {
        console.log(key + ": " + value);
      });


      
      this.propertyService.addAdveretisement(
        this.myFormGroup.value.title,
        this.myFormGroup.value.price,
        this.myFormGroup.value.description,
        this.myFormGroup.value.typeAd,
        this.myFormGroup.value.size,
        this.myFormGroup.value.type,
        this.myFormGroup.value.rooms,
        "false",
        "5",
        "false",
        this.myFormGroup.value.region,
        this.myFormGroup.value.ville,
        this.files
      ).subscribe(
        (response) => {
          console.log('Advertisement added successfully');
        },
        (error) => {
          console.log('Error adding advertisement', error);
        }
      );

   
    }else{
      const parking:boolean=true;
      const yardSpace:number=5;
      const garage:boolean=true;

      const formData= new FormData();
      formData.append('title','aaaaaa');
      formData.append('price', this.myFormGroup.value.price);
      formData.append('description', this.myFormGroup.value.description);
      formData.append('typeAd', this.myFormGroup.value.typeAd);
      formData.append('size', this.myFormGroup.value.size);
      formData.append('type', this.myFormGroup.value.type);
      formData.append('rooms', this.myFormGroup.value.type);
      formData.append('parking',parking.toString());
      formData.append('yardSpace', yardSpace.toString());
      formData.append('garage',garage.toString());
      formData.append('region', this.myFormGroup.value.region);
      formData.append('ville', this.myFormGroup.value.ville);
      if (this.files) {
        for (let i = 0; i < this.files.length; i++) {
          formData.append('photo', this.files[i].name);
        }
        
      }else{
        formData.append('photo','');
      }
      console.log(formData , ' FROM DATA');
      console.log(formData.get('title'), ' title from fromdata');




      console.log('try angain');


    }
    
    
  }
  */
  
  
  file: File[];

  /*TEST SUBMIT LISTING*/
  addAd(){
    console.log(' addAD BEGIN');
    const formData= new FormData();
    formData.append('title',this.myFormGroup.value.title);
    formData.append('price', this.myFormGroup.value.price.toString());
    formData.append('description', this.myFormGroup.value.description);
    formData.append('typeAd', this.myFormGroup.value.typeAd);
    formData.append('size', this.myFormGroup.value.size.toString());
    formData.append('type', this.myFormGroup.value.type);
    formData.append('rooms', this.myFormGroup.value.rooms.toString());
    formData.append('region', this.myFormGroup.value.region);
    formData.append('ville', this.myFormGroup.value.ville);
    
    /*
    if (this.files) {
      for (let i = 0; i < this.files.length; i++) {
        formData.append('photo', this.files[i]);
      }
      
    }else{
      formData.append('photo','');
    }*/

    if (this.files.length>0) {
      for (let i = 0; i < this.files.length; i++) {
      formData.append('photo',this.files[i]);
      }
    }
    console.log(this.file, ' file ');

    this.propertyService. addAdvertisement(formData).subscribe(
      response => console.log(response),
      error => console.log(error ,' error AddAD')
    );

    this.router.navigateByUrl('/profile-listings');


  }


/*
  public mapdata = mapdata;
  public icon = {
    icon: L.icon({
      iconSize: [50, 50],
      iconAnchor: [22, 41],
      popupAnchor: [2, -40],
      iconUrl: 'assets/img/misc/marker.png'
    })
  };
  */
  
  
 


  /*

  //submit params : 
  title:string="";
  typeAd:string="";
  type:string="";
  price:string="";
  size:any="";
  description:string="";
  region:string="";
  ville:string="";
  rooms:string;
  photo:any;
  neighborhood:string;
  garage:false;
  parking:false;
  yardSpace:0;
  submit(){
    console.log("submit TEST");

    const formData: FormData = new FormData();
    formData.append('title', this.title);
    formData.append('price', this.price);
    formData.append('description', this.description);
    formData.append('typeAd', this.typeAd);
    formData.append('size', this.size);
    formData.append('type', this.type);
    formData.append('rooms', this.rooms);
    formData.append('parking', this.parking.toString());
    formData.append('garage', this.garage.toString());
    formData.append('region', this.region);
    formData.append('ville', this.ville);
    if (this.files && this.files.length > 0) {
      for (let i = 0; i < this.files.length; i++) {
        formData.append('photo',"/assets/images"+this.files[i].name);
      }
    }
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`,'test fromData');
    });
    console.log(this.files,' test FILES');
  }*/
 
 


  ngOnInit() {
    console.log("myDropZoneControl: ", this.myDropZoneControl);
  }


  

  features = [
    { id: 1, icon: 'bone', title: 'Pet Friendly' },
    { id: 2, icon: 'chair', title: 'Furnished' },
    { id: 3, icon: 'fan', title: 'Cooling' },
    { id: 4, icon: 'garage', title: 'Parking' },
    { id: 5, icon: 'mailbox', title: 'Mailbox' },
    { id: 6, icon: 'eye', title: 'City View' },
  ];
  

}






