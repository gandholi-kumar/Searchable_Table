import { Component, OnInit } from '@angular/core';
import {
  TableColumnConfiguration,
  TableDataConfiguration,
} from '../table/table.model';
import {
  historyColumnDefinition,
  historyData,
} from 'src/app/constants/history_content';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  private title = 'History Component';
  private columns!: TableColumnConfiguration[];
  private data!: TableDataConfiguration[];

  ngOnInit() {
    this.columns = historyColumnDefinition;
    this.data = historyData;
  }
}
