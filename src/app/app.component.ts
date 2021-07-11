import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {animate, group, query, style, transition, trigger} from "@angular/animations";
import {RouterOutlet} from "@angular/router";
import {
  faHome,
  faFileAlt,
  faCode,
  faBars,
  faIdCardAlt,
  faCaretSquareRight,
  faCaretSquareLeft
} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    style({position: 'relative'}),
    query(':enter, :leave', style({position: 'absolute', width: '100%'}), {optional: true}),
    group([
      query(':enter', [
        style({transform: 'translateY(-100%)', opacity: 0}),
        animate('350ms ease-out', style({transform: 'translateY(0%)', opacity: 1}))
      ], {optional: true}),
      query(':leave', [
        animate('350ms ease-out', style({transform: 'translateY(-100%)', opacity: 0}))
      ], {optional: true}),
    ]),
  ])
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('menu')
  menu!: ElementRef;
  @ViewChild('sidebar')
  sidebar!: ElementRef<HTMLDivElement>;
  @ViewChild('content')
  content!: ElementRef<HTMLDivElement>;
  title = 'resume';
  faHome = faHome;
  faFile = faFileAlt;
  faCode = faCode;
  faEmp = faIdCardAlt;
  menuActive: boolean = true;

  constructor(private cdr: ChangeDetectorRef, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  getState(outlet: RouterOutlet): any {
    return {value: outlet.isActivated ? outlet.activatedRoute : ''};
  }

  getMenuState(sidebar: HTMLDivElement): IconProp {
    return this.menuActive ? faCaretSquareLeft : faCaretSquareRight;
  }
}
