import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-menu',
  imports: [CommonModule],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.css'
})
export class TopMenu {
  topMenuItems = [
    { label: '🔘 Help', icon: 'bi bi-question-circle-fill', link: '#' },
    { label: '🔄 Exchange/Return', icon: 'bi bi-arrow-repeat', link: '#' },
    { label: '📦 Track Order', icon: 'bi bi-truck', link: '#' },
    { label: '🔑 Signup/Login', icon: 'bi bi-box-arrow-in-right', link: '#' }
  ];
}
