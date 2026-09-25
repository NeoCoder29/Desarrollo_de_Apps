import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'accordion',
    loadComponent: () => import('./accordion/accordion.page').then( m => m.AccordionPage)
  },
  {
    path: 'action-sheet',
    loadComponent: () => import('./action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
  },
  {
    path: 'alert',
    loadComponent: () => import('./alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'badge',
    loadComponent: () => import('./badge/badge.page').then( m => m.BadgePage)
  },
  {
    path: 'breadcrumbs',
    loadComponent: () => import('./breadcrumbs/breadcrumbs.page').then( m => m.BreadcrumbsPage)
  },
  {
    path: 'button',
    loadComponent: () => import('./button/button.page').then( m => m.ButtonPage)
  },
  {
    path: 'card',
    loadComponent: () => import('./card/card.page').then( m => m.CardPage)
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./checkbox/checkbox.page').then( m => m.CheckboxPage)
  },
  {
    path: 'chip',
    loadComponent: () => import('./chip/chip.page').then( m => m.ChipPage)
  },
  {
    path: 'content',
    loadComponent: () => import('./content/content.page').then( m => m.ContentPage)
  },
  {
    path: 'date-time-pickers',
    loadComponent: () => import('./date-time-pickers/date-time-pickers.page').then( m => m.DateTimePickersPage)
  },
  {
    path: 'floating-action-button',
    loadComponent: () => import('./floating-action-button/floating-action-button.page').then( m => m.FloatingActionButtonPage)
  },
  {
    path: 'grid',
    loadComponent: () => import('./grid/grid.page').then( m => m.GridPage)
  },
  {
    path: 'icons',
    loadComponent: () => import('./icons/icons.page').then( m => m.IconsPage)
  },
  {
    path: 'infinite-scroll',
    loadComponent: () => import('./infinite-scroll/infinite-scroll.page').then( m => m.InfiniteScrollPage)
  },
  {
    path: 'inputs',
    loadComponent: () => import('./inputs/inputs.page').then( m => m.InputsPage)
  },
  {
    path: 'item',
    loadComponent: () => import('./item/item.page').then( m => m.ItemPage)
  },
  {
    path: 'list',
    loadComponent: () => import('./list/list.page').then( m => m.ListPage)
  },
  {
    path: 'media',
    loadComponent: () => import('./media/media.page').then( m => m.MediaPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'modal',
    loadComponent: () => import('./modal/modal.page').then( m => m.ModalPage)
  },
  {
    path: 'navigation',
    loadComponent: () => import('./navigation/navigation.page').then( m => m.NavigationPage)
  },
  {
    path: 'popover',
    loadComponent: () => import('./popover/popover.page').then( m => m.PopoverPage)
  },
  {
    path: 'progress-indicators',
    loadComponent: () => import('./progress-indicators/progress-indicators.page').then( m => m.ProgressIndicatorsPage)
  },
  {
    path: 'radio',
    loadComponent: () => import('./radio/radio.page').then( m => m.RadioPage)
  },
  {
    path: 'range',
    loadComponent: () => import('./range/range.page').then( m => m.RangePage)
  },
  {
    path: 'refresher',
    loadComponent: () => import('./refresher/refresher.page').then( m => m.RefresherPage)
  },
  {
    path: 'reorder',
    loadComponent: () => import('./reorder/reorder.page').then( m => m.ReorderPage)
  },
  {
    path: 'routing',
    loadComponent: () => import('./routing/routing.page').then( m => m.RoutingPage)
  },
  {
    path: 'searchbar',
    loadComponent: () => import('./searchbar/searchbar.page').then( m => m.SearchbarPage)
  },
  {
    path: 'segment',
    loadComponent: () => import('./segment/segment.page').then( m => m.SegmentPage)
  },
  {
    path: 'select',
    loadComponent: () => import('./select/select.page').then( m => m.SelectPage)
  },
  {
    path: 'toast',
    loadComponent: () => import('./toast/toast.page').then( m => m.ToastPage)
  },
  {
    path: 'toggle',
    loadComponent: () => import('./toggle/toggle.page').then( m => m.TogglePage)
  },
  {
    path: 'toolbar',
    loadComponent: () => import('./toolbar/toolbar.page').then( m => m.ToolbarPage)
  },
  {
    path: 'typography',
    loadComponent: () => import('./typography/typography.page').then( m => m.TypographyPage)
  },
];
