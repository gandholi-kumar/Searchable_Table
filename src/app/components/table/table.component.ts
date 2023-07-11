import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  TableColumnConfiguration,
  TableDataConfiguration,
} from './table.model';
import { columnData, rowDatas } from 'src/app/constants/table_content';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() columns!: TableColumnConfiguration[];
  @Input() rowDatas!: TableDataConfiguration[];
  @Output() menuClick: EventEmitter<TableDataConfiguration> =
    new EventEmitter();
  constructor(private employeeService: EmployeeService) {
    // this.columns = columnData;
    // this.rowDatas = rowDatas;
  }

  ngOnInit() {
    console.log('DataTableComponent', this.columns);
    // const empData = this.employeeService.getEmployee();
    // console.log(empData);
  }

  onMenuClick(rowData: TableDataConfiguration) {
    this.menuClick.emit(rowData);
  }
}
