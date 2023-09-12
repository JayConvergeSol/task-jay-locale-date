import { Component, OnInit } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    template: `
        <p-calendar [(ngModel)]="date" [showTime]="true" [showSeconds]="true"></p-calendar>
    `
})
export class ShowDateComponent implements OnInit {

    constructor(public ref: DynamicDialogRef,
         public config: DynamicDialogConfig
    ) {}

    date :string=''; 
    ngOnInit() {
        this.date = this.config.data.date;
    }  
}