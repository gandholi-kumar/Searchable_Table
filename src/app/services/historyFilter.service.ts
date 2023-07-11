import { Injectable } from '@angular/core';
import {
  keysModel,
  P6ParameterHistoryResponse,
} from 'src/app/components/history/history.model';

@Injectable({
  providedIn: 'root',
})
export class HistoryFilterService {
  constructor() {}

  filterHistoryTable(
    search: string,
    keys: keysModel[],
    tableData: P6ParameterHistoryResponse[]
  ) {
    if (keys.length === 0) {
      return tableData;
    } else {
      return tableData.filter((historyData) => {
        return keys.some((key) =>
          String(historyData[key]).toLowerCase().includes(search.toLowerCase())
        );
      });
    }
  }
}
