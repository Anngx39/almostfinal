import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { ExplorePageModule } from '../Explore/explore.module';
import { Tab2PageModule } from '../tab2/tab2.module';
import { TemplatePageModule } from '../Template/template.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ExplorePageModule,
    Tab2PageModule,
    TemplatePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
