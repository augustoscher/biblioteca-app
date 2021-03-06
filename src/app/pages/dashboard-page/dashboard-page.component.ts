import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {TdDataTableService} from '@covalent/core';
import {ResizeService} from '../../resize/resize.service';
import {routerAnimation} from '../../utils/page.animation';
import {AREA_CHART_OPTION, AREA_CHART_WITH_LINE_OPTION, DOUGHNUT_OPTION, INIDICATOR_ITEMS} from './chart-models';
import { DashboardService } from '../../services/dashboard.service';
import { Estatistica } from '../../model/estatistica';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  animations: [routerAnimation]
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  // Chart instances used for resizing after layout changes
  chartInstances = [];
  // Subscription for resizing events
  resizeSubscription;
  // Are chart model
  areaChartOption;
  // Are chart with line model
  areaChartWithLineOption;
  // Menu options
  menuItems = [
    {text: 'Refresh'},
    {text: 'Settings'},
    {text: 'Help'}
  ];
  // Model for doughnut chart
  doughnutOption;
  // Project list items
  projectItems = [
    {
      avatar: '/assets/avatars-img/4040.png',
      title: 'Claudette Girard',
      text: 'Posted 2 photos in ',
      project: 'Project 1',
      date: 'Today'
    },
    {
      avatar: '/assets/avatars-img/4040.png',
      title: 'Michele Pitts',
      text: 'Left comment in ',
      project: 'Project 2',
      date: '2 May'
    },
    {
      avatar: '/assets/avatars-img/4040.png',
      title: 'Crystal Stewart',
      text: 'Upload one files in ',
      project: 'Project 3',
      date: '4 April'
    }
  ];
  // Items for card with linecharts
  indicatorItems = [];
  // Rating list items
  ratingItems = [
    {
      // avatar: '/assets/avatars-img/4040.png',
      name: 'Teste 1',
      tag: '@teste1',
      value: 81.48
    },
    {
      // avatar: '/assets/avatars-img/4040.png',
      name: 'Teste 2',
      tag: '@teste2',
      value: 68
    },
    {
      // avatar: '/assets/avatars-img/4040.png',
      name: 'Teste 3',
      tag: '@teste3',
      value: 36
    }
  ];
  // // To do items
  // todoItems = [
  //   {
  //     title: 'Sections 1.10.32',
  //     text: 'It is a long established fact',
  //     done: false
  //   },
  //   {
  //     title: 'It has roots',
  //     text: 'Many desktop publishing ',
  //     done: false
  //   },
  //   {
  //     title: 'Richard McClintock',
  //     text: 'Aldus PageMaker',
  //     done: false
  //   }
  // ];
  // doneItems = [
  //   {
  //     title: 'The first line of Lorem Ipsum',
  //     text: 'It has survived not only five centuries',
  //     done: true
  //   }
  // ];
  
  public estatistica: Estatistica;
  
  constructor(
    private dataTableService: TdDataTableService,
    private resizeService: ResizeService,
    private _dashboardService: DashboardService) {
      
      this.estatistica = new Estatistica();

      this.resizeSubscription = resizeService.resizeInformer$.subscribe(
        () => this.chartInstances.forEach((chart) => chart.resize())
      );
    }
      
  ngOnInit(): void {
    this.carregarEstatistica();
    setTimeout(() => {
      this.areaChartOption = AREA_CHART_OPTION;
      this.areaChartOption.series[0].data = [1, 2, 3, 4, 4, 5, 1, 2, 3, 1, 3, 8];
      this.areaChartWithLineOption = AREA_CHART_WITH_LINE_OPTION;
      this.doughnutOption = DOUGHNUT_OPTION;
      this.indicatorItems = INIDICATOR_ITEMS;
    }, 0);
  }

  carregarEstatistica() {
    this._dashboardService.carregarEstatisticas()
        .subscribe(data => {
          this.estatistica = data;
         });
  }

  ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe();
  }
}
