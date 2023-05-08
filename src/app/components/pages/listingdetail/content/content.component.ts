import { Component, AfterContentInit, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import listing from '../../../../data/listings.json';
import agents from '../../../../data/agents.json';
import { PropertyService } from 'src/app/shared/properties/property.service';
import { advertisement } from 'src/app/shared/model/advertisement';
import { PropertiesService } from 'src/app/shared/properties/properties.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterContentInit {
  @ViewChild('contactForm', { static: true }) contactForm: NgForm;
  @ViewChild('carouselModalContent') carouselModalContent: any;


  constructor(private route: ActivatedRoute, private propertyService:PropertyService,
    private router: Router,private modalService: NgbModal) { }


  public listing : advertisement[];
  
  //rate 
  currentRate :number=0;

  
  // agents 
  public agents = agents;
  public getAuthor(items: string | any[]) {
    var elems = agents.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  public toNumber(value: any): number {
    return Number(value);
  }

  public listingdetails :advertisement;

   id=Number(this.route.snapshot.params.id);
  ngOnInit(): void {
    /*
    this.propertiesService.getProperties().subscribe(res=>{console.log(res); this.listing=res});
    const id = Number(this.router.snapshot.params['id']);
    console.log(id);
    this.listingdetails= this.getAdById(id);
    */
   /*
    this.propertiesService.getProperties().subscribe((data: advertisement[]) => {
      this.listing = data;
      this.listingdetails = this.getAdById(Number(this.router.snapshot.params.id));
      console.log(listing);
      console.log("details :"+this.listingdetails);  
      this.getMinPrice(this.listingdetails.id);
      this.getMaxPrice(this.listingdetails.id)
    });*/

    /*
    this.propertiesService.getProperties().subscribe(res=>{console.log(res); this.listing=res});
    const id = Number(this.router.snapshot.params['id']);
    console.log(id);
    this.listingdetails= this.getAdById(id);
    */
    /* 
    this.propertiesService.getProperties().subscribe((data: advertisement[]) => {
      this.listing = data;
      //this.listingdetails = this.getAdById(Number(this.router.snapshot.params.id));
      console.log(listing);
      //console.log("details :"+this.listingdetails);     
    });
    */
    


    this.propertyService.getAdByiD(Number(this.route.snapshot.params.id)).subscribe(ads => { 
      this.listingdetails = ads; 
      console.log("user ads by Id : "+JSON.stringify(this.listingdetails));
    });

    this.propertyService.currentLikes(this.id).subscribe(res=>{
      this.currentRate=res;
      console.log(this.currentRate,' CURRENT RATE')
    });

    this.getMinPrice(Number(this.route.snapshot.params.id));
    this.getMaxPrice(Number(this.route.snapshot.params.id));

  }

  max:number;
  min:number;
  
  getMinPrice(id :number){
    
    return this.propertyService.getMinPrice(id).subscribe((res:number)=>{this.min=res; console.log(this.min)});
  }

  getMaxPrice(id:number){
    return this.propertyService.getMaxPrice(id).subscribe((res:number)=>{this.max=res; console.log(this.max)});
  }

  //contact owner : 
  firstName:string;
  lastName:string;
  email:string;
  message:string;
  loading: boolean = false;
  showAlert: boolean = false;
  alertMessage:string;
  showAlertSucess:boolean=false;
  contactOwner(){
    

    if (!this.firstName || !this.lastName || !this.email || !this.message) {
      this.showAlert = true;
      return;
    }
    this.loading = true;
    const id = Number(this.route.snapshot.params.id);
    console.log('contact Start');
    /*
    this.propertyService.contactOwner(id, this.message, this.email, this.firstName, this.lastName).subscribe(response => {
      console.log(response, 'contact OWNER');
      this.loading = false;
    });
    */

    this.propertyService.contactOwner(id, this.message, this.email, this.firstName, this.lastName)
    .subscribe(
      response => {
        console.log(response, 'contact OWNER');
        //new
        this.loading = false;
        this.showAlertSucess = true;
        this.alertMessage = 'Message sent successfully';
        this.contactForm.resetForm();
        // Hide the alert message after 3 seconds
        
        setTimeout(() => {
          this.showAlertSucess = false;
        }, 4000);

       console.log('begin ngOninit');
        // Navigate back to the same component
        //this.route.navigate([`/listing-details-v1/`+id]);
        //this.router.navigate([`/listing-details-v1/${id}`]);
        /*
        this.listing=[];
        this.currentRate=0;
        this.agents=agents;
        this.id=Number(this.route.snapshot.params.id);
        */
        this.ngOnInit();
        
       
        
        // end new
      },
      error => {
        console.error(error);
      },
      () => { // this function will be called when the observable is complete, regardless of success or error
        this.loading = false;
      }
    );

    


  }
  


  /* contact without loading
    const id=Number(this.router.snapshot.params.id);
    console.log('contact Start');
    this.propertyService.contactOwner(id,this.message,this.email,this.firstName,this.lastName).subscribe(response => {
      console.log(response,'contact OWNER');
    });
  */


  
  /* 
  public setAdvertisement(id: number): void {
    this.propertyService
      .getAdvertisementById(id)
      .subscribe((ad: advertisement) => this.listingdetails = ad);
  }
  */
  getAdById(id:number): advertisement {
    return this.listing.find(listing => listing.id === id);
    
  }

  ngAfterContentInit(): void {
    /* 
    const id = Number(this.router.snapshot.params['id']);
    this.setAdvertisement(id);
    */
    //this.setAdvertisement(this.router.snapshot.params['id']);
    
    /*
    this.propertiesService.getProperties().subscribe((data: advertisement[]) => {
      this.listing = data;
    });*/
    
   
  }

  
  
  

 /*
  ngOnInit(): void {
    const id = this.router.snapshot.params.id;
    console.log(id);
    this.propertyService.getAdvertisementById(id).subscribe(
      (res: advertisement) => {
        this.listingdetails = res;
        console.log("the result "+res)
      },
      (err) => {
        console.log('Error fetching advertisement by ID: ', err);
      }
    );

    this.propertiesService.getProperties().subscribe(res=>{console.log(res); this.listing=res});

  }
  */

  /* old:
  public setListing(id: any) {
    this.listingdetails = listing.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setListing(this.router.snapshot.params.id);
  }
  */

  // settings
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    prevArrow: '.banner .slider-prev',
    nextArrow: '.banner .slider-next',
  }


  openCarouselModal(){
    const modalRef = this.modalService.open(this.carouselModalContent, { size: 'lg', centered: true });
  }

}
