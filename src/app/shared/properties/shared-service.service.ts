import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { advertisement } from '../model/advertisement';
import { User } from '../model/User';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
 

  constructor() { }
  private searchResultsSource = new Subject<advertisement[]>();
  searchResults$ = this.searchResultsSource.asObservable();

  setSearchResults(results: advertisement[]) {
    this.searchResultsSource.next(results);
  }

 //scraped
 private searchResultsSourceScraped = new Subject<{ user: User, advertisements: advertisement[] }>();
 searchResultsScraped$ = this.searchResultsSourceScraped.asObservable();

 setSearchResultsScraped(user: User, advertisements: advertisement[]) {
   const data = { user, advertisements };
   this.searchResultsSourceScraped.next(data);
 }

  // sending premium 
  private premiumSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  public setPremium(value: boolean): void {
    this.premiumSubject.next(value);
  }

  public getPremium(): Observable<boolean> {
    return this.premiumSubject.asObservable();
  }
}
