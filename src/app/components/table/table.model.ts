import { TemplateRef } from '@angular/core';

export interface TableColumnConfiguration {
  identifier: keyof TableDataConfiguration;
  label: string;
  componentType: ComponentType;
  isVisible: boolean;
  isEditable?: boolean;
  isSortable?: boolean;
  isFilterable?: boolean;
  width?: number;
  showTooltip?: boolean;
  customCellTemplate?: TemplateRef<any>;
}

export interface TableDataConfiguration {
  header: string;
  content: string;
  [key: string]: any;
  actions?: boolean;
  url?: TableURL;
}

export interface TableURL {
  label: string;
  urlHref: string;
}

export enum ComponentType {
  TEXTBOX = 'textbox',
  LINK = 'link',
  OPTIONS = 'options',
  TEMPLATEREF = 'templateRef',
}
