import { Component, Inject, LOCALE_ID } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LocaleService } from '../../shared/service/locale.service';
import { ShowDateComponent } from '../../shared/dialog/showDate.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  title = 'task-jay-locale-date';
  ref: DynamicDialogRef | undefined;
  date!: Date ;
  dateUTC :string ='';
  localeData :any
  
  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private primengConfig: PrimeNGConfig,
    private localeService : LocaleService,
    public dialogService: DialogService
  ){}
    
  ngOnInit(): void {
    this.changeLocale(navigator.language)
    this.primengConfig.setTranslation(this.localeData);
  }

  StoreDate(){
    let month = this.date.getUTCMonth()+1;
    this.dateUTC = this.date.getUTCFullYear()+"-"+month+"-"+ this.date.getUTCDate()+" "+ this.date.getUTCHours()+":"+this.date.getUTCMinutes()+":"+this.date.getUTCSeconds();
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
