import { Component } from '@angular/core';
import { TopHeader } from './top-header/top-header';
import { TopMenu } from './top-menu/top-menu';
import { MainMenu } from './main-menu/main-menu';

@Component({
  selector: 'app-header',
  imports: [TopHeader,TopMenu,MainMenu],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

}
