import { Component, Input } from '@angular/core';
import { IonicModule, MenuController } from '@ionic/angular'; // Đảm bảo import IonicModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  standalone: true,
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  imports: [IonicModule]
})
export class BaseLayoutComponent {
  @Input() title: string = '';
  
  constructor(
    private menu: MenuController,
    private router: Router
  ) {};

  openMenu() {
    this.menu.enable(true, 'main-menu'); 
    this.menu.open('main-menu');        
  }

  goToExplore() {
    this.router.navigate(['/tabs/explore']);
  }
}