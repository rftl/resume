import {Component, OnInit, Renderer2, ViewChild, AfterViewInit, ElementRef, ChangeDetectorRef} from '@angular/core';
import {faCaretDown, faCaretRight, faTerminal} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit, AfterViewInit {

  @ViewChild('ncl')
  ncl!: ElementRef;
  @ViewChild('tf')
  tf!: ElementRef;
  @ViewChild('dcfcu')
  dcfcu!: ElementRef;

  bullet = faTerminal

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.cdr.detectChanges()
  }

  getArrowIcon(cat: HTMLDivElement): IconProp {
    if (cat.hidden) {
      return faCaretRight;
    }
    return faCaretDown;
  }

}
