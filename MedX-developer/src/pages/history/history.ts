import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Chart } from 'chart.js';
import { Query } from './../home/query';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  @ViewChildren('lineCanvas') lineCanvas;
  lineChart: any;

  obj: Query;

  arr: Query[];

  public static queries: Query[] = new Array();

  constructor(public navCtrl: NavController) {
    this.arr = HistoryPage.queries;
  }

  ionViewDidLoad () {
    for(let i in this.lineCanvas.toArray()/*.reverse()*/){

      this.lineChart = new Chart(this.lineCanvas.toArray()[i].nativeElement, {

        type: 'line',
        data: {
          labels: [2003, 2004, 2005, 2006, 2007],
          datasets: [{
            label: 'Spendeng on drug development',
            data:  HistoryPage.queries[i].result,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }

      });
    }
  }


}