import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-pickup-point',
  templateUrl: './pickup-point.component.html',
  styleUrls: ['./pickup-point.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PickupPointComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.getTimeDiff();
    this.getdiff();
  }

  timeObject: any[] = [
    { id: '5fs61f1f56s1bsb6s546', startTime: '2015-01-01T07:05:00.000Z', endTime: '2015-01-01T08:45:00.000Z', differentTime: '' },
    { id: '2f965fbfbdf6b6fd5b6f', startTime: '2015-01-01T07:30:00.000Z', endTime: '2015-01-01T15:15:00.000Z', differentTime: '' },
    { id: '9b564b64b65d561dsv5d', startTime: '2015-01-01T06:50:00.000Z', endTime: '2015-01-01T08:20:00.000Z', differentTime: '' },
    { id: '46d4v6sv64v654v48rsg', startTime: '2015-01-01T07:20:00.000Z', endTime: '2015-01-01T09:12:00.000Z', differentTime: '' },
    { id: '8v46d48v6ds45v64sdd5', startTime: '2015-01-01T05:45:00.000Z', endTime: '2015-01-01T05:12:00.000Z', differentTime: '' },
    { id: '6ef156e4v48d4vv6d4v1', startTime: '2015-01-01T07:05:00.000Z', endTime: '2015-01-01T07:40:00.000Z', differentTime: '' },
    { id: '9fsa4c8s64c64sc6sa5c', startTime: '2015-01-01T08:23:00.000Z', endTime: '2015-01-01T09:19:00.000Z', differentTime: '' },
    { id: '3as8c4s94c86s48c64ps', startTime: '2015-01-01T06:38:00.000Z', endTime: '2015-01-01T08:54:00.000Z', differentTime: '' },
    { id: '1sdc4864c64c646c465y', startTime: '2015-01-01T08:18:00.000Z', endTime: '2015-01-01T09:39:00.000Z', differentTime: '' },
    { id: '7bd68v486464dv648d6v', startTime: '2015-01-01T05:55:00.000Z', endTime: '2015-01-01T08:30:00.000Z', differentTime: '' },
  ];

  /*--------- Using Object Value to Get Two Timezone Difference Complete Working Method ----------*/
  getdiff() {
    console.clear();
    for (let time of this.timeObject) {

      let dt1 = time.startTime;
      let dt2 = time.endTime;

      let start = moment(dt1);
      let end = moment(dt2);

      /*---- Getting the difference: hours (h), minutes (m) and seconds (s) ----*/
      let h = end.diff(start, 'hours');
      let m = end.diff(start, 'minutes') - (60 * h);

      /*---- Formating in hh:mm:ss (appends a left zero when num < 10) ----*/
      let hh = ('0' + h).slice(-2);
      let mm = ('0' + m).slice(-2);

      let hhh = +hh > 0 ? hh + " hr" : "";
      console.log(`${hhh} ${mm} min`);

    }
  }




  /*--------- static Get Two Timezone Difference Method (Working) ----------*/
  // getTimeDiff() {
  //   var now = "2015-01-01T05:45:00.000Z";
  //   var then = "2015-01-01T18:15:00.000Z";
  //   var ms = moment(then).diff(moment(now));
  //   var d = moment.duration(ms);
  //   var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm");
  //   console.log(s);
  // }


}
