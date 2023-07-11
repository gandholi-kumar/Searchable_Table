import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HistoryComponent } from './components/history/history.component';
import { TableComponent } from './components/table/table.component';
import { EmployeeService } from './services/employee.service';
import { HistoryFilterService } from './services/historyFilter.service';

@NgModule({
  declarations: [AppComponent, HistoryComponent, TableComponent],
  imports: [BrowserModule],
  providers: [EmployeeService, HistoryFilterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
