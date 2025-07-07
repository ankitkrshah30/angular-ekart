import { Component } from '@angular/core';
import { Header } from './header/header';
import { Container } from './container/container';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Header,Container,FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'angular-ekart';
}
