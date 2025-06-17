import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../service/document.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  mapPoints: any = null;

  constructor() { }

  ngOnInit() {
  }
}
