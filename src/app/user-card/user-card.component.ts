import { Component, Input } from '@angular/core';
import { GithubUser } from '../models/github-user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user: GithubUser | null;
  @Input() withBorder?: boolean = false;

  constructor() {
    this.user = null;

  }
}
