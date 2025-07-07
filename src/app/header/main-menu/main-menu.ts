import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-menu',
  imports: [RouterModule, CommonModule],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css'
})
export class MainMenu {
  mainMenuItems=[
    { label: 'Home', link: '#' },
    { label: 'Products', link: '#' },
    { label: 'About', link: '#' },
    { label: 'Contact', link: '#' }
  ];
}
