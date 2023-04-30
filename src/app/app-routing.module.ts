import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AppAdminComponent } from './app-admin/app-admin.component';

const routes: Routes = [
  // Hompages
  { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: 'Homepage' } },
  { path: 'home-v2', loadChildren: () => import('./components/pages/hometwo/hometwo.module').then(m => m.HometwoModule), data: { breadcrumb: 'Homepage' } },
  { path: 'home-v3', loadChildren: () => import('./components/pages/homethree/homethree.module').then(m => m.HomethreeModule), data: { breadcrumb: 'Homepage' } },
  { path: 'home-v4', loadChildren: () => import('./components/pages/homefour/homefour.module').then(m => m.HomefourModule), data: { breadcrumb: 'Homepage' } },
  { path: 'home-v5', loadChildren: () => import('./components/pages/homefive/homefive.module').then(m => m.HomefiveModule), data: { breadcrumb: 'Homepage' } },
  // Blog
  { path: 'blog/cat/:catId', loadChildren: () => import('./components/pages/bloggrid/bloggrid.module').then(m => m.BloggridModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'blog/tag/:tagId', loadChildren: () => import('./components/pages/bloggrid/bloggrid.module').then(m => m.BloggridModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'blog/author/:authorId', loadChildren: () => import('./components/pages/bloggrid/bloggrid.module').then(m => m.BloggridModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'blog-grid', loadChildren: () => import('./components/pages/bloggrid/bloggrid.module').then(m => m.BloggridModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'blog-list', loadChildren: () => import('./components/pages/bloglist/bloglist.module').then(m => m.BloglistModule), data: { breadcrumb: 'Blog List' } },
  { path: 'blog-single/:id', loadChildren: () => import('./components/pages/blogsingle/blogsingle.module').then(m => m.BlogsingleModule), data: { breadcrumb: 'Blog Details' } },
  // Pages
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: 'About Us' } },
  { path: 'services', loadChildren: () => import('./components/pages/services/services.module').then(m => m.ServicesModule), data: { breadcrumb: 'Services' } },
  { path: 'faq', loadChildren: () => import('./components/pages/faq/faq.module').then(m => m.FaqModule), data: { breadcrumb: "FAQ's" } },
  { path: 'pricing', loadChildren: () => import('./components/pages/pricing/pricing.module').then(m => m.PricingModule), data: { breadcrumb: 'Pricing' } },
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: 'Contact Us' } },
  { path: 'coming-soon', loadChildren: () => import('./components/pages/comingsoon/comingsoon.module').then(m => m.ComingsoonModule), data: { breadcrumb: 'Coming Soon' } },
  { path: 'error', loadChildren: () => import('./components/pages/error/error.module').then(m => m.ErrorModule), data: { breadcrumb: 'Error 404' } },
  { path: 'login', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule), data: { breadcrumb: 'Login' } },
  { path: 'register', loadChildren: () => import('./components/pages/register/register.module').then(m => m.RegisterModule), data: { breadcrumb: 'Register' } },
  { path: 'legal', loadChildren: () => import('./components/pages/legal/legal.module').then(m => m.LegalModule), data: { breadcrumb: 'Legal' } },
  // Listings
  { path: 'listing/cat/:type', loadChildren: () => import('./components/pages/listinggrid/listinggrid.module').then(m => m.ListinggridModule), data: { breadcrumb: 'Listing Grid' } },
  { path: 'listing-grid', loadChildren: () => import('./components/pages/listinggrid/listinggrid.module').then(m => m.ListinggridModule), data: { breadcrumb: 'Listing Grid' } },
  { path: 'listing-list', loadChildren: () => import('./components/pages/listinglist/listinglist.module').then(m => m.ListinglistModule), data: { breadcrumb: 'Listing List' } },
  { path: 'listing-map', loadChildren: () => import('./components/pages/listingmap/listingmap.module').then(m => m.ListingmapModule), data: { breadcrumb: 'Listing Map' } },
  { path: 'listing-details-v1/:id', loadChildren: () => import('./components/pages/listingdetail/listingdetail.module').then(m => m.ListingdetailModule), data: { breadcrumb: 'Listing Details' } },
  { path: 'listing-details-v2/:id', loadChildren: () => import('./components/pages/listingdetailtwo/listingdetailtwo.module').then(m => m.ListingdetailtwoModule), data: { breadcrumb: 'Listing Details' } },
  { path: 'listing-details-v3/:id', loadChildren: () => import('./components/pages/listingdetailthree/listingdetailthree.module').then(m => m.ListingdetailthreeModule), data: { breadcrumb: 'Listing Details' } },
  { path: 'submit-listing', loadChildren: () => import('./components/pages/submitlisting/submitlisting.module').then(m => m.SubmitlistingModule), data: { breadcrumb: 'Submit Listings' } },
  { path: 'compare-listings', loadChildren: () => import('./components/pages/comparelisting/comparelisting.module').then(m => m.ComparelistingModule), data: { breadcrumb: 'Compare Listings' } },
  // Agents
  { path: 'agent-archive', loadChildren: () => import('./components/pages/agentarchive/agentarchive.module').then(m => m.AgentarchiveModule), data: { breadcrumb: 'Agent Archive' } },
  { path: 'agent-details/:id', loadChildren: () => import('./components/pages/agentdetails/agentdetails.module').then(m => m.AgentdetailsModule), data: { breadcrumb: 'Agent Details' } },
  { path: 'profile', loadChildren: () => import('./components/pages/profile/profile.module').then(m => m.ProfileModule), data: { breadcrumb: 'Profile' } },
  { path: 'profile-listings', loadChildren: () => import('./components/pages/profilelisting/profilelisting.module').then(m => m.ProfilelistingModule), data: { breadcrumb: 'Profile Listings' } },
  { path: 'profile-saved-listings', loadChildren: () => import('./components/pages/profilesaved/profilesaved.module').then(m => m.ProfilesavedModule), data: { breadcrumb: 'Profile Saved Listings' } },
  // Agency
  { path: 'agency-archive', loadChildren: () => import('./components/pages/agencyarchive/agencyarchive.module').then(m => m.AgencyarchiveModule), data: { breadcrumb: 'Agency Archive' } },
  { path: 'agency-details/:id', loadChildren: () => import('./components/pages/agencydetails/agencydetails.module').then(m => m.AgencydetailsModule), data: { breadcrumb: 'Agency Details' } },

  //admin 
  {
    path: 'admin', component: AppAdminComponent, 
    children: [
      { path: '', component: HomeComponent }
      , {
        path: 'users', component: ListUserComponent , children: [
          { path: 'add', component: AddUserComponent,pathMatch: 'full'},
          
          
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
