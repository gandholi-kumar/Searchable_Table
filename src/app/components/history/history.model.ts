import { TableColumnConfiguration } from '../table/table.model';

// History table data interface
export interface P6ParameterHistoryResponse {
  parameterNames: string[];
  label?: string;
  oldValue: string | null;
  newValue: string | null;
  changedBy: string;
  updatedOn: string;
  task: string;
  kind?: string;
  valueCategory?: string;
}

// History table column keys mapping
export type keysModel = keyof P6ParameterHistoryResponse &
  keyof TableColumnConfiguration;
