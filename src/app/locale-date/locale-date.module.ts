import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowDateComponent } from './shared/dialog/showDate.component';
import { ButtonModule } from 'primeng/button';
import { localeDateRoutingModule } from './locale-date-routing.module';

@NgModule({
  declarations: [
    CalendarComponent,
    ShowDateComponent
  ],
  imports: [
    CommonModule,
    localeDateRoutingModule,
    CalendarModule,
    FormsModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    
  ],
  providers:[ DialogService,DatePipe]
})
export class LocaleDateModule { }
