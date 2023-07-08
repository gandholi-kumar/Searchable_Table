import { ComponentType } from "../components/table/table.model";

export const columnData =  [
  {
    identifier: 'header',
    label: 'Title',
    componentType: ComponentType.TEMPLATEREF,
    isEditable: false,
    isVisible: true,
    customCellTemplate: this.titleTemplate,
  },
  {
    identifier: 'content',
    label: 'Sub title',
    componentType: ComponentType.TEXTBOX,
    isEditable: false,
    isVisible: true,
  },
  {
    identifier: 'url',
    label: 'External link',
    componentType: ComponentType.TEMPLATEREF,
    isVisible: true,
    customCellTemplate: this.linkTemplate,
  },
  {
    identifier: 'actions',
    label: 'Actions',
    componentType: ComponentType.OPTIONS,
    isVisible: true,
  },
];

export const rowDatas = [
  {
    header: 'Angular',
    content: 'Angular is a development platform, built on TypeScript',
    url: {
      label: 'Angular',
      urlHref: 'https://angular.io/guide/what-is-angular',
    },
    actions: true,
  },
  {
    header: 'React',
    content: 'React is a JavaScript library for building user interfaces.',
    url: {
      label: 'React',
      urlHref: 'https://reactjs.org/docs/getting-started.html',
    },
    actions: true,
  },
  {
    header: 'Svelte',
    content: 'Svelte converts your app into ideal JavaScript at build time',
    url: {
      label: 'Svelte',
      urlHref: 'https://svelte.dev/docs',
    },
    actions: true,
  },
  {
    header: 'Vue',
    content: 'Vue is a progressive framework for building user interfaces',

    actions: true,
  },
];
