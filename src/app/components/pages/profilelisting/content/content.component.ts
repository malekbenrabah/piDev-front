import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import listing from '../../../../data/listings.json';
import agents from '../../../../data/agents.json';
import { TypeAd, advertisement } from 'src/app/shared/model/advertisement';
import { PropertyService } from 'src/app/shared/properties/property.service';
import { Router } from '@angular/router';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Type } from 'src/app/shared/model/property';
import { Observable, forkJoin, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { FormControl, NgModel, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';




@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [
    trigger('accordionAnimation', [
      state('closed', style({
        right: '-300px', 
        opacity: 0,
      })),
      state('open', style({
        right: '0',
        opacity: 1,
      })),
      transition('closed <=> open', animate('300ms ease-in-out')),
    ]),
  ]
})
export class ContentComponent implements OnInit {

  @ViewChild('confirmationModal') confirmationModal: ElementRef;
  @ViewChild('updateModal') updateModal:ElementRef;
  //@ViewChild('priceField', { static: false }) priceField!: ElementRef<HTMLInputElement>;
  constructor(private propService:PropertyService,private router: Router, private ngbModal:NgbModal, private http:HttpClient, private sanitizer: DomSanitizer) {}

  public isAuthenticated = true;
  public userAds:advertisement[];

 
  ngOnInit(): void {
    
    this.propService.getUsersAd().subscribe((ads:advertisement[]) => { 
      console.log(ads)
      this.userAds = ads; 
      console.log(this.userAds, 'user ads yyyyesss ');
      this.isAuthenticated = true;
    },
    (error: HttpErrorResponse) => {
      console.log(error);
      if (error.status === 401) {
        this.isAuthenticated = false;
        // Rediriger vers la page de connexion
        this.router.navigate(['/login']);
      }
    }
    );
    
    
    
  }
  
  



  onSubmit(){
    console.log("on submit");
  }

  // pagination
  page: number = 1;
  count:number=0;
  tableSize:number=4;

  test: advertisement;
  test$: Observable<advertisement>;


  id:number;
  showAlert: boolean = false;
  deletedAdId:number;
  
  typeAds=Object.values(TypeAd);
  types = Object.values(Type);

  features = [
    { id: 1, icon: 'bone', title: 'parking' },
    { id: 2, icon: 'chair', title: 'garage' },
  ];
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

  //accrodion

  isAccordionOpen = false;


  
delete(){   
  console.log("delete");
  console.log(this.id,'id');
  
  this.propService.deleteAdvertisement(this.id).subscribe(
      (result) => {
        
        console.log('Advertisement deleted successfully:', result);
          this.deletedAdId = this.id;
          /*
          setTimeout(() => {
              this.deletedAdId = null;
          }, 2000);
          // recharger la page après la suppression et affichage de l'alerte
          setTimeout(() => {
              window.location.reload();
          }, 2000);
          */
          this.ngOnInit();
      },
      (error) => {
        
        console.error('Failed to delete advertisement:', error);
      }
    );
    this.ngbModal.dismissAll();
    console.log('final');

  }
  openModalDelete(content: any, id :number) {
    this.id=id;
    this.ngbModal.open(content);
  }

  // validations : 


  priceEmpty: boolean = false;
  priceInvalidNumber: boolean = false;

  

  validatePriceInput(value: string) {
    this.price = value.replace(/\D/g, ''); // Remove non-numeric characters and update this.price
    
    // Reset validation state
    this.priceEmpty = false;
    this.priceInvalidNumber = false;
  
    // Check for empty value
    if (this.price.trim().length === 0) {
      this.priceEmpty = true;
    } else {
      const pattern = /^\d+$/; // Regular expression to match only numbers
      if (!pattern.test(this.price)) {
        this.priceInvalidNumber = true;
      }
    }
  
    console.log(this.priceEmpty , 'price Empty');
    console.log(this.priceInvalidNumber , 'price Invalid');
  }

  onKeyDown(event: KeyboardEvent) {
    // Allow only numeric values and specific key codes
    const allowedKeyCodes = [8, 9, 13, 27, 46]; // Backspace, Tab, Enter, Escape, Delete
    if (event.keyCode !== undefined && (event.ctrlKey || event.altKey ||
        (event.keyCode < 48 || event.keyCode > 57) &&
        (event.keyCode < 96 || event.keyCode > 105) &&
        !allowedKeyCodes.includes(event.keyCode))) {
      event.preventDefault();
      this.priceInvalidNumber = true;
      this.priceEmpty=false;
  } else {
    this.priceInvalidNumber = false;
  }
  }
  
  isPriceInvalid(): boolean {
    return this.priceEmpty || this.priceInvalidNumber;
  }
  
  isPriceEmpty(): boolean {
    return this.priceEmpty;
  }
  
  isPriceInvalidNumber(): boolean {
    return this.priceInvalidNumber;
  }

  sizeEmpty:boolean=false;
  sizeInvalidNumber:boolean=false;
  
  
  validateSizeInput(value: string) {
    this.size = value.replace(/\D/g, ''); // Remove non-numeric characters and update this.price
    
    // Reset validation state
    this.sizeEmpty = false;
    this.sizeInvalidNumber = false;
  
    // Check for empty value
    if (this.size.trim().length === 0) {
      this.sizeEmpty = true;
    } else {
      const pattern = /^\d+$/; // Regular expression to match only numbers
      if (!pattern.test(this.size)) {
        this.sizeInvalidNumber = true;
      }
    }
  
    console.log(this.priceEmpty , 'price Empty');
    console.log(this.priceInvalidNumber , 'price Invalid');
  }

  onKeyDownSize(event: KeyboardEvent) {
    // Allow only numeric values and specific key codes
    const allowedKeyCodes = [8, 9, 13, 27, 46]; // Backspace, Tab, Enter, Escape, Delete
    if (event.keyCode !== undefined && (event.ctrlKey || event.altKey ||
        (event.keyCode < 48 || event.keyCode > 57) &&
        (event.keyCode < 96 || event.keyCode > 105) &&
        !allowedKeyCodes.includes(event.keyCode))) {
      event.preventDefault();
      this.sizeInvalidNumber = true;
      this.sizeEmpty=false;
    } else {
      this.sizeInvalidNumber = false;
    }
  }
  
  isSizeInvalid(): boolean {
    return this.sizeEmpty || this.sizeInvalidNumber;
  }
  
  isSizeEmpty(): boolean {
    return this.sizeEmpty;
  }
  
  isSizeInvalidNumber(): boolean {
    return this.sizeInvalidNumber;
  }





  
  images:string[]=[];
  imageFiles: File[] = [];
  safeImageUrls: SafeResourceUrl[] = [];

  
  openModalUpdate(content:any,id:number){
    this.id=id;
  
    
    this.test$ = this.propService.getAdByiD(this.id);
    this.test$.subscribe((res: advertisement) => {
      this.test = res;
      this.region = this.test.property.region;
      this.onRegionChange(); // Update the cities based on the selected region
      this.ville = this.test.property.ville;
      // Assign values to the properties for initialization
      this.title = this.test.title;
      this.selectedTypeAd = this.test.typeAd;
      this.selectedType = this.test.property.type;
      this.price = this.test.price;
      this.size = this.test.property.size;
      this.description = this.test.description;
      this.rooms = this.test.property.rooms;
      this.garage = this.test.property.garage;
      this.parking = this.test.property.parking;
      this.images=this.test.property.photo;
      console.log("test get ad by ID: " + JSON.stringify(this.test));
    
  });

  this.ngbModal.open(this.updateModal,{ size: 'lg', centered: true }) ;

}

fetchImageFile(imagePath): Observable<Blob> {
  return this.http.get(imagePath, { responseType: 'blob' });
}
  

  
  




  

  //update params : 
  title:string="";
  selectedTypeAd:TypeAd;
  selectedType:Type;
  price:string="";
  size:any="";
  description:string="";
  region:string="";
  ville:string="";
  garage:boolean;
  parking:boolean;
  rooms:number;
  yardSpace:string="";
  photo:any;
 

  regions = ['tunis', 'sousse', 'sfax'];
  cities: string[] = [];
  
  onRegionChange() {
    switch (this.region) {
      case 'tunis':
        this.cities = ['Tunis', 'Ariana', 'Ben Arous'];
        break;
      case 'sousse':
        this.cities = ['Sousse', 'Monastir', 'Mahdia'];
        break;
      case 'sfax':
        this.cities = ['Sfax', 'Gabes', 'Medenine'];
        break;
      default:
        this.cities = [];
        break;
    }
  }
 
  showSuccessAlert = false;

  UpdateAd(){
    console.log(' Update AD BEGIN');
    console.log(this.id,' check ID :UPDATE');
    const formData= new FormData();
    formData.append('title',this.title);
    formData.append('price', this.price.toString());
    formData.append('description', this.description);
    formData.append('typeAd', TypeAd[this.selectedTypeAd]);
    formData.append('size', this.size.toString());
    formData.append('type', Type[this.selectedType]);
    formData.append('rooms', this.rooms.toString());
    formData.append('region', this.region);
    formData.append('ville', this.ville);
    //test formdata
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`,'test fromData');
    });

    if (this.files.length>0) {
      for (let i = 0; i < this.files.length; i++) {
      formData.append('photo',this.files[i]);
      }
    }
   
    /*
    this.propService.updateAd(this.id,formData).subscribe(
      response => console.log(response),
      error => console.log(error ,' error AddAD')
    );
     // Dismiss all open modals
     this.ngbModal.dismissAll();

     // Navigate to the '/profile-listings' route
     this.router.navigate(['/profile-listings']);

    // Start a timer to hide the success alert after 30 seconds
    timer(30000).subscribe(() => {
    this.showSuccessAlert = false;
    });*/

    this.propService.updateAd(this.id, formData).subscribe(
      response => {
        console.log(response);
  
        // Show the success alert
        this.showSuccessAlert = true;

        // Start a timer to hide the success alert after 30 seconds
        timer(10000).subscribe(() => {
          this.showSuccessAlert = false;
        });


        this.ngOnInit();
  
        
  
        // Navigate to the '/profile-listings' route
        //this.router.navigate(['/profile-listings']);
      },
      error => console.log(error, ' error AddAD')
    );
    // Dismiss all open modals
    this.ngbModal.dismissAll();
  
  }



  onUpdate(){
    console.log("update");

    const formData: FormData = new FormData();
    formData.append('title', this.title);
    formData.append('price', this.price);
    formData.append('description', this.description);
    formData.append('typeAd', TypeAd[this.selectedTypeAd]);
    formData.append('size', this.size);
    formData.append('type', Type[this.selectedType]);
    formData.append('rooms', this.rooms.toString());
    formData.append('parking', this.parking.toString());
    formData.append('garage', this.garage.toString());
    formData.append('region', this.region);
    formData.append('ville', this.ville);
    if (this.files && this.files.length > 0) {
      for (let i = 0; i < this.files.length; i++) {
        formData.append('photo',this.files[i]);
      }
    }
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`,'test fromData');
    });
    console.log(this.files,' test FILES');
    //consommatio du service update
    this.propService.updateAd(this.id,formData).subscribe(
      res => {
        console.log(res);
       // this.router.navigate(['/ads']);
      },
      err => console.log(err)
    );
  }


  ngAfterViewInit(): void {}

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(date);
  }
  

}
