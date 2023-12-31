import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  locales: any = {
    "de-DE": {
      "closeText": "Schließen",
      "prevText": "Zurück",
      "nextText": "Weiter",
      "monthNames": [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
      ],
      "monthNamesShort": [
        "Jan",
        "Feb",
        "Mär",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dez"
      ],
      "dayNames": [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag"
      ],
      "dayNamesShort": ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
      "dayNamesMin": ["S", "M", "D", "M ", "D", "F ", "S"],
      "weekHeader": "Woche",
      "firstDay": 1,
      "isRTL": false,
      "showMonthAfterYear": false,
      "yearSuffix": "",
      "timeOnlyTitle": "Nur Zeit",
      "timeText": "Zeit",
      "hourText": "Stunde",
      "minuteText": "Minute",
      "secondText": "Sekunde",
      "currentText": "Aktuelles Datum",
      "ampm": false,
      "month": "Monat",
      "week": "Woche",
      "day": "Tag",
      "allDayText": "Ganzer Tag",
      "dateFormat": "dd.mm.yy"
    },
  
    "fr-FR": {
      "closeText": "Fermer",
      "prevText": "Précédent",
      "nextText": "Suivant",
      "monthNames": [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
      ],
      "monthNamesShort": [
        "Jan",
        "Fév",
        "Mar",
        "Avr",
        "Mai",
        "Jun",
        "Jul",
        "Aoû",
        "Sep",
        "Oct",
        "Nov",
        "Déc"
      ],
      "dayNames": [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi"
      ],
      "dayNamesShort": ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
      "dayNamesMin": ["D", "L", "M", "M", "J", "V", "S"],
      "weekHeader": "Semaine",
      "firstDay": 1,
      "isRTL": false,
      "showMonthAfterYear": false,
      "yearSuffix": "",
      "timeOnlyTitle": "Choisir l'heure",
      "timeText": "Heure",
      "hourText": "Heures",
      "minuteText": "Minutes",
      "secondText": "Secondes",
      "currentText": "Maintenant",
      "ampm": false,
      "month": "Mois",
      "week": "Semaine",
      "day": "Jour",
      "allDayText": "Toute la journée",
      "dateFormat": "dd/mm/yy"
    },
  
    "en-US": {
      "closeText": "Close",
      "prevText": "Previous",
      "nextText": "Next",
      "monthNames": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      "monthNamesShort": [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      "dayNames": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Tue", "Fri", "Sat"],
      "dayNamesMin": ["S", "M", "T", "W ", "T", "F ", "S"],
      "weekHeader": "Week",
      "firstDay": 1,
      "isRTL": false,
      "showMonthAfterYear": false,
      "yearSuffix": "",
      "timeOnlyTitle": "Only Time",
      "timeText": "Time",
      "hourText": "Time",
      "minuteText": "Minute",
      "secondText": "Second",
      "currentText": "Current Date",
      "ampm": false,
      "month": "Month",
      "week": "week",
      "day": "Day",
      "allDayText": "All Day",
      "dateFormat": "mm-dd-yy"
    },
  
    "it-IT": {
        "closeText": "Chiudi",
        "prevText": "Precedente",
        "nextText": "Prossimo",
        "monthNames": [
          "Gennaio",
          "Febbraio",
          "Marzo",
          "Aprile",
          "Maggio",
          "Giugno",
          "Luglio",
          "Agosto",
          "Settembre",
          "Ottobre",
          "Novembre",
          "Dicembre"
        ],
        "monthNamesShort": [
          "Gen",
          "Feb",
          "Mar",
          "Apr",
          "Mag",
          "Giu",
          "Lug",
          "Ago",
          "Set",
          "Ott",
          "Nov",
          "Dic"
        ],
        "dayNames": [
          "Domenica",
          "Lunedì",
          "Martedì",
          "Mercoledì",
          "Giovedì",
          "Venerdì",
          "Sabato"
        ],
        "dayNamesShort": [
          "Dom",
          "Lun",
          "Mar",
          "Mer",
          "Gio",
          "Ven",
          "Sab"
        ],
        "dayNamesMin": [
          "D",
          "L",
          "M",
          "M ",
          "G",
          "V ",
          "S"
        ],
        "weekHeader": "Sett",
        "firstDay": 1,
        "isRTL": false,
        "showMonthAfterYear": false,
        "yearSuffix": "",
        "timeOnlyTitle": "Solo Tempo",
        "timeText": "Ora",
        "hourText": "Ore",
        "minuteText": "Minuto",
        "secondText": "Secondo",
        "currentText": "Data Odierna",
        "ampm": false,
        "month": "Mese",
        "week": "Settimana",
        "day": "Giorno",
        "allDayText": "Tutto il Giorno",
        "dateFormat": "dd.mm.yy"
      },
  
      "pl-PL": {
        "closeText": "Zamknij",
        "prevText": "Poprzedni",
        "nextText": "Następny",
        "monthNames": [
          "Styczeń",
          "Luty",
          "Marzec",
          "Kwiecień",
          "Maj",
          "Czerwiec",
          "Lipiec",
          "Sierpień",
          "Wrzesień",
          "Październik",
          "Listopad",
          "Grudzień"
        ],
        "monthNamesShort": [
          "Sty",
          "Lut",
          "Mar",
          "Kwi",
          "Maj",
          "Cze",
          "Lip",
          "Sie",
          "Wrz",
          "Paź",
          "Lis",
          "Gru"
        ],
        "dayNames": [
          "Niedziela",
          "Poniedziałek",
          "Wtorek",
          "Środa",
          "Czwartek",
          "Piątek",
          "Sobota"
        ],
        "dayNamesShort": [
          "Nie",
          "Pon",
          "Wt",
          "Śr",
          "Czw",
          "Pt",
          "So"
        ],
        "dayNamesMin": [
          "N",
          "P",
          "W",
          "Ś",
          "Cz",
          "Pt",
          "So"
        ],
        "weekHeader": "Tydzień",
        "firstDay": 1,
        "isRTL": false,
        "showMonthAfterYear": false,
        "yearSuffix": "r",
        "timeOnlyTitle": "Tylko czas",
        "timeText": "Czas",
        "hourText": "Godzina",
        "minuteText": "Minuta",
        "secondText": "Sekunda",
        "currentText": "Teraz",
        "ampm": false,
        "month": "Miesiąc",
        "week": "Tydzień",
        "day": "Dzień",
        "allDayText": "Cały dzień",
        "dateFormat": "yy-mm-dd"
      },
  
      "ru-RU": {
        "closeText": "Закрыть",
        "prevText": "Назад",
        "nextText": "Вперёд",
        "monthNames": [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь"
        ],
        "monthNamesShort": [
          "Янв",
          "Фев",
          "Мар",
          "Апр",
          "Май",
          "Июн",
          "Июл",
          "Авг",
          "Сен",
          "Окт",
          "Ноя",
          "Дек"
        ],
        "dayNames": [
          "Воскресенье",
          "Понедельник",
          "Вторник",
          "Среда",
          "Четверг",
          "Пятница",
          "Субота"
        ],
        "dayNamesShort": [
          "Воск",
          "Пон",
          "Вт",
          "Ср",
          "Четв",
          "Пят",
          "Суб"
        ],
        "dayNamesMin": [
          "В",
          "П",
          "Вт",
          "С ",
          "Ч",
          "П ",
          "Сб"
        ],
        "weekHeader": "Неделя",
        "firstDay": 1,
        "isRTL": false,
        "showMonthAfterYear": false,
        "yearSuffix": "",
        "timeOnlyTitle": "Только время",
        "timeText": "Время",
        "hourText": "Час",
        "minuteText": "Минута",
        "secondText": "Секунда",
        "currentText": "Сегодня",
        "ampm": false,
        "month": "Месяц",
        "week": "неделя",
        "day": "День",
        "allDayText": "Весь день",
        "dateFormat": "dd.mm.yy"
      },
  
      "sr-SR": {
        "closeText": "Zatvori",
        "prevText": "Nazad",
        "nextText": "Napred",
        "monthNames": [
          "Januar",
          "Februar",
          "Mart",
          "April",
          "Maj",
          "Juni",
          "Juli",
          "Avgust",
          "Septembar",
          "Oktobar",
          "Novembar",
          "Decembar"
        ],
        "monthNamesShort": [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Maj",
          "Jun",
          "Jul",
          "Avg",
          "Sep",
          "Okt",
          "Nov",
          "Dec"
        ],
        "dayNames": [
          "Nedelja",
          "Ponedeljak",
          "Utorak",
          "Sreda",
          "Četvrtak",
          "Petak",
          "Subota"
        ],
        "dayNamesShort": [
          "Ned",
          "Pon",
          "Uto",
          "Sre",
          "Čet",
          "Pet",
          "Sub"
        ],
        "dayNamesMin": [
          "N",
          "P",
          "U",
          "S ",
          "Č",
          "P ",
          "S"
        ],
        "weekHeader": "Sedmica",
        "firstDay": 1,
        "isRTL": false,
        "showMonthAfterYear": false,
        "yearSuffix": "",
        "timeOnlyTitle": "Samo Vreme",
        "timeText": "Vreme",
        "hourText": "Sat",
        "minuteText": "Minuta",
        "secondText": "Sekunda",
        "currentText": "Danas",
        "ampm": false,
        "month": "Mesec",
        "week": "sedmica",
        "day": "Dan",
        "allDayText": "Celi Dan",
        "dateFormat": "dd.mm.yy"
      },
  
      "zh_CN": {
        "closeText": "关闭",
        "prevText": "上个月",
        "nextText": "下个月",
        "currentText": "今天",
        "monthNames": [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        "monthNamesShort": [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        "dayNames": [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六"
        ],
        "dayNamesShort": [
          "日",
          "一",
          "二",
          "三",
          "四",
          "五",
          "六"
        ],
        "dayNamesMin": [
          "日",
          "一",
          "二",
          "三",
          "四",
          "五",
          "六"
        ],
        "weekHeader": "周",
        "firstDay": 1,
        "isRTL": false,
        "showMonthAfterYear": true,
        "yearSuffix": "",
        "timeOnlyTitle": "仅时间",
        "timeText": "时间",
        "hourText": "时",
        "minuteText": "分",
        "secondText": "秒",
        "ampm": false,
        "month": "月",
        "week": "周",
        "day": "日",
        "allDayText": "全天",
        "dateFormat": "yy-mm-dd"
      },
  
      "zh-Hans-CN": {
        "closeText": "关闭",
        "prevText": "上个月",
        "nextText": "下个月",
        "currentText": "今天",
        "monthNames": [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        "monthNamesShort": [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        "dayNames": [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六"
        ],
        "dayNamesShort": [
          "日",
          "一",
          "二",
          "三",
          "四",
          "五",
          "六"
        ],
        "dayNamesMin": [
          "日",
          "一",
          "二",
          "三",
          "四",
          "五",
          "六"
        ],
        "weekHeader": "周",
        "firstDay": 1,
        "isRTL": false,
        "showMonthAfterYear": true,
        "yearSuffix": "",
        "timeOnlyTitle": "仅时间",
        "timeText": "时间",
        "hourText": "时",
        "minuteText": "分",
        "secondText": "秒",
        "ampm": false,
        "month": "月",
        "week": "周",
        "day": "日",
        "allDayText": "全天",
        "dateFormat": "yy-mm-dd"
      },
  
      "es-ES": {
        "closeText": "Cerrar",
        "prevText": "Anterior",
        "nextText": "Siguiente",
        "monthNames": [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre"
        ],
        "monthNamesShort": [
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Sep",
          "Oct",
          "Nov",
          "Dic"
        ],
        "dayNames": [
          "Domingo",
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado"
        ],
        "dayNamesShort": [
          "Dom",
          "Lun",
          "Mar",
          "Mie",
          "Jue",
          "Vie",
          "Sab"
        ],
        "dayNamesMin": [
          "D",
          "L",
          "M",
          "X",
          "J",
          "V",
          "S"
        ],
        "weekHeader": "Semana",
        "firstDay": 1,
        "isRTL": false,
        "showMonthAfterYear": false,
        "yearSuffix": "",
        "timeOnlyTitle": "Sólo hora",
        "timeText": "Tiempo",
        "hourText": "Hora",
        "minuteText": "Minuto",
        "secondText": "Segundo",
        "currentText": "Fecha actual",
        "ampm": false,
        "month": "Mes",
        "week": "Semana",
        "day": "Día",
        "allDayText": "Todo el día",
        "dateFormat": "dd/mm/yy"
      },
  
      "vi-VI": {
        "closeText": "Tắt",
        "prevText": "Tháng trước",
        "nextText": "Tháng sau",
        "monthNames": [
          "Tháng 1",
          "Tháng 2",
          "Tháng 3",
          "Tháng 4",
          "Tháng 5",
          "Tháng 6",
          "Tháng 7",
          "Tháng 8",
          "Tháng 9",
          "Tháng 10",
          "Tháng 11",
          "Tháng 12"
        ],
        "monthNamesShort": [
          "Tháng 1",
          "Tháng 2",
          "Tháng 3",
          "Tháng 4",
          "Tháng 5",
          "Tháng 6",
          "Tháng 7",
          "Tháng 8",
          "Tháng 9",
          "Tháng 10",
          "Tháng 11",
          "Tháng 12"
        ],
        "dayNames": [
          "Chúa Nhựt",
          "Thứ Hai",
          "Thứ Ba",
          "Thứ Tư",
          "Thứ Năm",
          "Thứ Sáu",
          "Thứ Bảy"
        ],
        "dayNamesShort": [
          "CN",
          "Hai",
          "Ba",
          "Tư",
          "Năm",
          "Sáu",
          "Bảy"
        ],
        "dayNamesMin": [
          "CN",
          "T2",
          "T3",
          "T4",
          "T5",
          "T6",
          "T7"
        ],
        "weekHeader": "Tuần",
        "firstDay": 1,
        "isRTL": false,
        "showMonthAfterYear": false,
        "yearSuffix": "",
        "timeOnlyTitle": "Chọn giờ",
        "timeText": "Giờ",
        "hourText": "Giờ",
        "minuteText": "Phút",
        "secondText": "Giây",
        "currentText": "Giờ hiện hành",
        "ampm": false,
        "month": "Tháng",
        "week": "Tuần",
        "day": "Ngày",
        "allDayText": "Cả ngày",
        "dateFormat": "dd/mm/yy"
      },
  
      "en-GB": {
        "closeText": "Close",
        "prevText": "Previous",
        "nextText": "Next",
        "monthNames": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        "monthNamesShort": [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        "dayNames": [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Tue", "Fri", "Sat"],
        "dayNamesMin": ["S", "M", "T", "W ", "T", "F ", "S"],
        "weekHeader": "Week",
        "firstDay": 1,
        "isRTL": false,
        "showMonthAfterYear": false,
        "yearSuffix": "",
        "timeOnlyTitle": "Only Time",
        "timeText": "Time",
        "hourText": "Time",
        "minuteText": "Minute",
        "secondText": "Second",
        "currentText": "Current Date",
        "ampm": false,
        "month": "Month",
        "week": "week",
        "day": "Day",
        "allDayText": "All Day",
        "dateFormat": "dd/mm/yy"
      },
  
      "en-IN": {
        "closeText": "Close",
        "prevText": "Previous",
        "nextText": "Next",
        "monthNames": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        "monthNamesShort": [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        "dayNames": [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Tue", "Fri", "Sat"],
        "dayNamesMin": ["S", "M", "T", "W ", "T", "F ", "S"],
        "weekHeader": "Week",
        "firstDay": 1,
        "isRTL": false,
        "showMonthAfterYear": false,
        "yearSuffix": "",
        "timeOnlyTitle": "Only Time",
        "timeText": "Time",
        "hourText": "Time",
        "minuteText": "Minute",
        "secondText": "Second",
        "currentText": "Current Date",
        "ampm": false,
        "month": "Month",
        "week": "week",
        "day": "Day",
        "allDayText": "All Day",
        "dateFormat": "dd-mm-yy"
      },
  
    }
  
  constructor() { }

  getLocale(locale: string) {
    var trans = this.locales[locale];
    // console.log(trans);
    return trans
  }
}
