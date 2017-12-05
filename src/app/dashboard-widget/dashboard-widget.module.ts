import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashcardComponent } from './dashcard/dashcard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { DoughnutGraphComponent } from './doughnut-graph/doughnut-graph.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PricingPlanComponent } from './pricing-plan/pricing-plan.component';
import { MatListModule } from '@angular/material/list';
import { WeatherComponent } from './weather/weather.component';
import { Ng2OdometerModule } from 'ng2-odometer';
import { SharePriceComponent } from './share-price/share-price.component';
import { AirportGraphComponent } from './airport-graph/airport-graph.component';
import { RoundProgressbarComponent } from './round-progressbar/round-progressbar.component'; 
import {RoundProgressModule} from 'angular-svg-round-progressbar'; 

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    Ng2OdometerModule,
    RoundProgressModule
  ],
  declarations: [
      DashcardComponent, 
      LineGraphComponent, 
      BarGraphComponent, 
      DoughnutGraphComponent, 
      ProfileCardComponent,
      PricingPlanComponent,
      WeatherComponent,
      SharePriceComponent,
      AirportGraphComponent,
      RoundProgressbarComponent,

      ],
  exports: [
      DashcardComponent, 
      LineGraphComponent, 
      BarGraphComponent, 
      DoughnutGraphComponent, 
      ProfileCardComponent,
      PricingPlanComponent,
      WeatherComponent,
      SharePriceComponent,
      AirportGraphComponent,
      RoundProgressbarComponent
      
})
export class DashboardWidgetModule { }
