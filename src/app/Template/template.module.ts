import { IonicModule, IonRippleEffect} from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplatePage } from './template.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { FileCardComponent } from '../components/file-card/file-card.component';

import { TemplatePageRoutingModule } from './template-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TemplatePageRoutingModule,
    HttpClientModule
  ],
  declarations: [TemplatePage, FileCardComponent ]
})
export class TemplatePageModule {}
