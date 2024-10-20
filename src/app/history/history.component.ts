import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ErrorState, GithubResultWithHistory } from '../store/history.model';
import { Observable } from 'rxjs';
import { selectAllHistory } from '../store/history.selector';
import { clearHistory } from '../store/history.action';
import { UserCardComponent } from '../user-card/user-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  gitHistory$: Observable<Array<GithubResultWithHistory>>;
  customClass: string = '';
  constructor(private store: Store){
    this.gitHistory$ = this.store.select(selectAllHistory)
  }

  onClear(){
    this.store.dispatch(clearHistory())
  }

  isNotError(data: GithubResultWithHistory | ErrorState) {
    
    return !data.hasOwnProperty('error');
  }
}
