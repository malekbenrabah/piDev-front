import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import listing from '../../../../data/listings.json';
import agents from '../../../../data/agents.json';
import { advertisement } from 'src/app/shared/model/advertisement';
import { PropertyService } from 'src/app/shared/properties/property.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @ViewChild('confirmationModal') confirmationModal: ElementRef;
  
  constructor(private propService:PropertyService,private router: Router, private ngbModal:NgbModal) {}
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
    

  

    this.propService.getUserAdsById(1).subscribe((res:advertisement[])=>{this.test=res;console.log("test users ad By ID : "+JSON.stringify(this.test))});
    
  }
  
  test:advertisement[];

  id:number;
  showAlert: boolean = false;
  deletedAdId:number;
  openModal(content: any, id :number) {
    this.id=id;
    this.ngbModal.open(content);
  }
 
  delete(){   
   console.log("delete");
   console.log(this.id,'id');
   
   this.propService.deleteAdvertisement(this.id).subscribe(
      (result) => {
        
        console.log('Advertisement deleted successfully:', result);
        
       
          // alerte
          //this.showAlert = true;
        
          // cacher l'alerte après 10 secondes
          /*
          setTimeout(() => {
              this.showAlert = false;
          }, 7000);
          */
          this.deletedAdId = this.id;
          setTimeout(() => {
              this.deletedAdId = null;
          }, 2000);
          // recharger la page après la suppression et affichage de l'alerte
          setTimeout(() => {
              window.location.reload();
          }, 2000);
      },
      (error) => {
        
        console.error('Failed to delete advertisement:', error);
      }
    );
    this.ngbModal.dismissAll();

    
    console.log('final');

  }

  onUpdate(){
    
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
