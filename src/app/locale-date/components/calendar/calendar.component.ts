import { Component, Inject, LOCALE_ID } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LocaleService } from '../../shared/service/locale.service';
import { ShowDateComponent } from '../../shared/dialog/showDate.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  title = 'task-jay-locale-date';
  ref: DynamicDialogRef | undefined;
  date!: Date ;
  dateUTC :string | null ='';
  localeData :any
  
  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private primengConfig: PrimeNGConfig,
    private localeService : LocaleService,
    public dialogService: DialogService,
    public datePipe : DatePipe
  ){}
    
  ngOnInit(): void {
    this.changeLocale(navigator.language)
    this.primengConfig.setTranslation(this.localeData);
  }

  StoreDate(){
    this.dateUTC = this.datePipe.transform(this.date,"yyyy-MM-ddThh:mm:ss:+0000",'UTC')
  }

  changeLocale(locale : string) {
    this.localeData = this.localeService.getLocale(locale)
  }

  show() {
    this.ref = this.dialogService.open(ShowDateComponent, { 
      data:{
        date : this.date
      },
      header: 'Selected date was...',
      width: '500px',
      height: '500px',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });
  }

}
