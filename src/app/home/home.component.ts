import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GithubService } from '../services/github.service';
import { GithubUser } from '../models/github-user';
import { Observable, catchError, throwError } from 'rxjs';
import { UserCardComponent } from '../user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { GithubResultWithHistory } from '../store/history.model';
import { addToHistory } from '../store/history.action';
import { selectAllHistory, selectHistoryState } from '../store/history.selector';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  loading: boolean  = false;
  result: GithubUser | null;
  errorState : string = '';
  customClass: string = 'with-border';
  constructor(private store: Store, private githubSearch: GithubService) {
    this.result = null;
  }
  
  searchForm = new FormGroup({
    search: new FormControl('')
  });

  onSubmit(): void {
    this.loading = true
    this.errorState = '';
    if(this.searchForm.valid) {
      this.githubSearch.search(<string>this.searchForm.value.search)
      .subscribe((result: GithubUser) => {
        this.result = result;
        this.store.dispatch(addToHistory({searchHistory: {...result, keyword: <string>this.searchForm.value.search}}))
      }, (error) => {
        this.errorState = 'Search Result not found';
        this.store.dispatch(addToHistory({searchHistory: {keyword: <string> this.searchForm.value.search, error: 'Search Result not found'}}))
        console.log(error);
        this.loading = false;
      }, () => {
        this.loading = false;
      })
    }
  }

}
