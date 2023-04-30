import { Component, AfterContentInit, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import listing from '../../../../data/listings.json';
import agents from '../../../../data/agents.json';
import { PropertyService } from 'src/app/shared/properties/property.service';
import { advertisement } from 'src/app/shared/model/advertisement';
import { PropertiesService } from 'src/app/shared/properties/properties.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterContentInit {

  constructor(private router: ActivatedRoute, private propertyService:PropertyService, private propertiesService:PropertiesService) { }


  public listing : advertisement[];
  
  
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

   id=Number(this.router.snapshot.params.id);
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
    this.propertiesService.getProperties().subscribe((data: advertisement[]) => {
      this.listing = data;
      //this.listingdetails = this.getAdById(Number(this.router.snapshot.params.id));
      console.log(listing);
      //console.log("details :"+this.listingdetails);     
    });

    this.propertyService.getAdByiD(Number(this.router.snapshot.params.id)).subscribe(ads => { 
      this.listingdetails = ads; 
      console.log("user ads by Id : "+JSON.stringify(this.listingdetails));
    });

    this.getMinPrice(Number(this.router.snapshot.params.id));
    this.getMaxPrice(Number(this.router.snapshot.params.id));

  }

  max:number;
  min:number;
  
  getMinPrice(id :number){
    
    return this.propertyService.getMinPrice(id).subscribe((res:number)=>{this.min=res; console.log(this.min)});
  }

  getMaxPrice(id:number){
    return this.propertyService.getMaxPrice(id).subscribe((res:number)=>{this.max=res; console.log(this.max)});
  }

  
  
  
  /* kkhra
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
    /* khra
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

}
