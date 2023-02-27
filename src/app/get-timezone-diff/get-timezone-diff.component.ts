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

    /*----- for sort time wise object ----*/
    this.sortPickTime();
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
        { pickPoinId: '5b0814d9889c', pickTime: '2023-02-16T01:45:18Z', areaName: 'aaa', studentLength: 1 },
        { pickPoinId: 'a0e8e79b5c31', pickTime: '2023-02-16T02:00:10Z', areaName: 'bbb', studentLength: 3 },
        { pickPoinId: '5bad393db396', pickTime: '2023-02-16T01:30:55Z', areaName: 'ccc', studentLength: 5 },
        { pickPoinId: '946eee1a904c', pickTime: '2023-02-16T02:00:35Z', areaName: 'ddd', studentLength: 7 },
        { pickPoinId: '65159d41e2fc', pickTime: '2023-02-16T02:30:09Z', areaName: 'eee', studentLength: 9 },
        { pickPoinId: '2039756dc403', pickTime: '2023-02-17T01:05:55Z', areaName: 'fff', studentLength: 11 },
      ]
    },
    {
      busId: '2f965fbfbdf6',
      name: '101-B',
      totalStudent: 0,
      pickPoints: [
        { pickPoinId: '358273123cc2', pickTime: '2023-02-17T01:45:16Z', areaName: 'ggg', studentLength: 2 },
        { pickPoinId: '01cf09c64f89', pickTime: '2023-02-17T02:00:30Z', areaName: 'hhh', studentLength: 4 },
        { pickPoinId: 'f88c0e91b16f', pickTime: '2023-02-21T01:37:47Z', areaName: 'iii', studentLength: 6 },
        { pickPoinId: 'aa7d9917bebc', pickTime: '2023-02-21T01:40:03Z', areaName: 'jjj', studentLength: 8 },
        { pickPoinId: '6368189811dc', pickTime: '2023-02-20T01:28:14Z', areaName: 'kkk', studentLength: 10 },
        { pickPoinId: '980a26427a7f', pickTime: '2023-02-20T01:30:34Z', areaName: 'lll', studentLength: 12 },
      ],
    },
    {
      busId: '9b564b64b65d',
      name: '101-C',
      totalStudent: 0,
      pickPoints: [
        { pickPoinId: 'b12c54e28d96', pickTime: '2023-02-20T02:15:16Z', areaName: 'mmm', studentLength: 3 },
        { pickPoinId: '50253993ec90', pickTime: '2023-02-21T01:36:39Z', areaName: 'nnn', studentLength: 6 },
        { pickPoinId: '0f88f3a965af', pickTime: '2023-02-20T01:52:03Z', areaName: 'ooo', studentLength: 9 },
        { pickPoinId: '526e815ac45e', pickTime: '2023-02-21T01:37:20Z', areaName: 'ppp', studentLength: 12 },
        { pickPoinId: '5507c6a40bdf', pickTime: '2023-02-20T02:30:10Z', areaName: 'qqq', studentLength: 15 },
        { pickPoinId: '082b9b6efc81', pickTime: '2023-02-20T02:00:26Z', areaName: 'rrr', studentLength: 18 },
      ],
    },
    {
      busId: '46d4v6sv64v6',
      name: '101-D',
      totalStudent: 0,
      pickPoints: [
        { pickPoinId: '8503fe9f47a8', pickTime: '2023-02-17T02:00:30Z', areaName: 'sss', studentLength: 4 },
        { pickPoinId: 'c5db3b970dda', pickTime: '2023-02-21T01:37:47Z', areaName: 'ttt', studentLength: 8 },
        { pickPoinId: 'fcf6071094e0', pickTime: '2023-02-20T02:00:26Z', areaName: 'uuu', studentLength: 12 },
        { pickPoinId: '61fc49d30f34', pickTime: '2023-02-21T01:36:39Z', areaName: 'vvv', studentLength: 16 },
        { pickPoinId: 'c6ee9b741dc4', pickTime: '2023-02-20T02:15:16Z', areaName: 'www', studentLength: 20 },
        { pickPoinId: '7a8f38418aaa', pickTime: '2023-02-20T01:30:34Z', areaName: 'xxx', studentLength: 24 },
      ],
    },
    {
      busId: '8v46d48v6ds4',
      name: '101-E',
      totalStudent: 0,
      pickPoints: [
        { pickPoinId: '429f867fdaaa', pickTime: '2023-02-16T01:45:18Z', areaName: 'yyy', studentLength: 5 },
        { pickPoinId: '95c4d4cb56a9', pickTime: '2023-02-16T02:00:10Z', areaName: 'zzz', studentLength: 10 },
        { pickPoinId: 'f323f7f821d7', pickTime: '2023-02-17T03:20:30Z', areaName: 'abc', studentLength: 15 },
        { pickPoinId: '2da748c10c33', pickTime: '2023-02-21T01:37:47Z', areaName: 'def', studentLength: 20 },
        { pickPoinId: '5a32e4ea49de', pickTime: '2023-02-21T01:36:39Z', areaName: 'ghi', studentLength: 25 },
        { pickPoinId: 'db9612b4f4bb', pickTime: '2023-02-20T02:15:16Z', areaName: 'jkl', studentLength: 30 },
      ],
    },
  ];

  /*--- get sum using method ---*/
  totalStudentCount() {
    const resp = this.sumNestedObject.map(arr => {
      arr.pickPoints.forEach((res: any) => {
        arr.totalStudent += res.studentLength;
        console.log(arr.totalStudent);
      });
      // return [arr.totalStudent];
    });
  }


  /*--- get sum using method ---*/
  sortPickTime() {
    for (let mainOjb of this.sumNestedObject) {
      // mainOjb.pickPoints.sort((a: any, b: any) => (a.pickTime > b.pickTime) ? 1 : (a.pickTime < b.pickTime) ? -1 : 0);
      console.log(mainOjb);

      for (let innerObj of mainOjb.pickPoints) {
        let aaa = Object.values(innerObj)[1];
        console.warn(aaa)
      }
    }
  }



}
