import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-get-timezone-diff',
  templateUrl: './get-timezone-diff.component.html',
  styleUrls: ['./get-timezone-diff.component.scss']
})
export class GetTimezoneDiffComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*----- for Timezone -----*/
    // this.getTimeDiff();
    this.getdiff();

    /*----- for Get Sum for Nested Objects -----*/
    this.totalStudentCount();
  }


  /************************************************************************************************************************
                                      Time Difference Between Two toISOString TimeZone
  ************************************************************************************************************************/
  busRouteObj: any[] = [
    { id: '5fs61f1f56s1bsb6s546', startTime: '2015-01-01T07:05:00.000Z', endTime: '2015-01-01T08:45:00.000Z', differentTime: '' },
    { id: '2f965fbfbdf6b6fd5b6f', startTime: '2015-01-01T07:30:00.000Z', endTime: '2015-01-01T15:15:00.000Z', differentTime: '' },
    { id: '9b564b64b65d561dsv5d', startTime: '2015-01-01T06:50:00.000Z', endTime: '2015-01-01T08:20:00.000Z', differentTime: '' },
    { id: '46d4v6sv64v654v48rsg', startTime: '2015-01-01T07:20:00.000Z', endTime: '2015-01-01T09:12:00.000Z', differentTime: '' },
    { id: '8v46d48v6ds45v64sdd5', startTime: '2015-01-01T05:45:00.000Z', endTime: '2015-01-01T05:12:00.000Z', differentTime: '' },
    { id: '6ef156e4v48d4vv6d4v1', startTime: '2015-01-01T07:05:00.000Z', endTime: '2015-01-01T07:40:00.000Z', differentTime: '' },
    { id: '9fsa4c8s64c64sc6sa5c', startTime: '2015-01-01T08:23:00.000Z', endTime: '2015-01-01T09:19:00.000Z', differentTime: '' },
    { id: '3as8c4s94c86s48c64ps', startTime: '2015-01-01T06:38:00.000Z', endTime: '2015-01-01T08:54:00.000Z', differentTime: '' },
    { id: '1sdc4864c64c646c465y', startTime: '2015-01-01T08:18:00.000Z', endTime: '2015-01-01T09:39:00.000Z', differentTime: '' },
    { id: '7bd68v486464dv648d6v', startTime: '2015-01-01T06:00:00.000Z', endTime: '2015-01-01T08:00:00.000Z', differentTime: '' },
  ];

  /*--------- Using Object Value to Get Two Timezone Difference Complete Working Method ----------*/
  getdiff() {
    console.clear();
    for (let getTime of this.busRouteObj) {
      let busStartTime = getTime.startTime;
      let busEndTime = getTime.endTime;
      let startTime = moment(busStartTime);
      let endTime = moment(busEndTime);

      /*---- Getting the difference: hours (h), minutes (m) and seconds (s) ----*/
      let hour = endTime.diff(startTime, 'hours');
      let min = endTime.diff(startTime, 'minutes') - (60 * hour);
      /*---- Formating in hh:mm:ss (appends a left zero when num < 10) ----*/
      let hh = ('0' + hour).slice(-2);
      let mm = ('0' + min).slice(-2);

      let finalHour = +hh > 0 ? hh + " hr" : "";
      let finalMin = mm > '00' ? mm + " min" : "";
      getTime.differentTime = `${finalHour} ${finalMin}`
    }
    return this.busRouteObj;
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



  /************************************************************************************************************************
                                    Finding Sum of each column of Nested Array of object
  ************************************************************************************************************************/
  sumNestedObject: any[] = [
    {
      busId: '5fs61f1f56s1',
      name: '101-A',
      totalStudent: 0,
      pickPoints: [
        { pickPoinId: '5b0814d9889c', areaName: 'aaa', studentLength: 1 },
        { pickPoinId: 'a0e8e79b5c31', areaName: 'bbb', studentLength: 3 },
        { pickPoinId: '5bad393db396', areaName: 'ccc', studentLength: 5 },
        { pickPoinId: '946eee1a904c', areaName: 'ddd', studentLength: 7 },
        { pickPoinId: '65159d41e2fc', areaName: 'eee', studentLength: 9 },
        { pickPoinId: '2039756dc403', areaName: 'fff', studentLength: 11 },
      ]
    },
    {
      busId: '2f965fbfbdf6',
      name: '101-B',
      totalStudent: 0,
      pickPoints: [
        { pickPoinId: '358273123cc2', areaName: 'ggg', studentLength: 2 },
        { pickPoinId: '01cf09c64f89', areaName: 'hhh', studentLength: 4 },
        { pickPoinId: 'f88c0e91b16f', areaName: 'iii', studentLength: 6 },
        { pickPoinId: 'aa7d9917bebc', areaName: 'jjj', studentLength: 8 },
        { pickPoinId: '6368189811dc', areaName: 'kkk', studentLength: 10 },
        { pickPoinId: '980a26427a7f', areaName: 'lll', studentLength: 12 },
      ],
    },
    {
      busId: '9b564b64b65d',
      name: '101-C',
      totalStudent: 0,
      pickPoints: [
        { pickPoinId: 'b12c54e28d96', areaName: 'mmm', studentLength: 3 },
        { pickPoinId: '50253993ec90', areaName: 'nnn', studentLength: 6 },
        { pickPoinId: '0f88f3a965af', areaName: 'ooo', studentLength: 9 },
        { pickPoinId: '526e815ac45e', areaName: 'ppp', studentLength: 12 },
        { pickPoinId: '5507c6a40bdf', areaName: 'qqq', studentLength: 15 },
        { pickPoinId: '082b9b6efc81', areaName: 'rrr', studentLength: 18 },
      ],
    },
    {
      busId: '46d4v6sv64v6',
      name: '101-D',
      totalStudent: 0,
      pickPoints: [
        { pickPoinId: '8503fe9f47a8', areaName: 'sss', studentLength: 4 },
        { pickPoinId: 'c5db3b970dda', areaName: 'ttt', studentLength: 8 },
        { pickPoinId: 'fcf6071094e0', areaName: 'uuu', studentLength: 12 },
        { pickPoinId: '61fc49d30f34', areaName: 'vvv', studentLength: 16 },
        { pickPoinId: 'c6ee9b741dc4', areaName: 'www', studentLength: 20 },
        { pickPoinId: '7a8f38418aaa', areaName: 'xxx', studentLength: 24 },
      ],
    },
    {
      busId: '8v46d48v6ds4',
      name: '101-E',
      totalStudent: 0,
      pickPoints: [
        { pickPoinId: '429f867fdaaa', areaName: 'yyy', studentLength: 5 },
        { pickPoinId: '95c4d4cb56a9', areaName: 'zzz', studentLength: 10 },
        { pickPoinId: 'f323f7f821d7', areaName: 'abc', studentLength: 15 },
        { pickPoinId: '2da748c10c33', areaName: 'def', studentLength: 20 },
        { pickPoinId: '5a32e4ea49de', areaName: 'ghi', studentLength: 25 },
        { pickPoinId: 'db9612b4f4bb', areaName: 'jkl', studentLength: 30 },
      ],
    },
  ];

  /*--- get sum using method ---*/
  totalStudentCount() {
    const res = this.sumNestedObject.map(arr => {
      arr.pickPoints.forEach((obj: any) => {
        arr.totalStudent += obj.studentLength;
      });
      return [arr.totalStudent];
    });
  }



}
