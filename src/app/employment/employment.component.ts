import {Component, OnInit, Renderer2, ViewChild, AfterViewInit, ElementRef, ChangeDetectorRef} from '@angular/core';
import {faCaretDown, faCaretRight, faTerminal} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import EmploymentJson from "../../assets/data/employment.json"
import {Employment} from "../models/data.models";

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit, AfterViewInit {

  bullet = faTerminal

  employmentData: Employment[]

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.employmentData = EmploymentJson
  }

  ngAfterViewInit() {
    this.cdr.detectChanges()
  }

  getArrowIcon(code: string): IconProp {
    return document.getElementById(code)?.hidden ? faCaretRight : faCaretDown;
  }

  toggleContent(code: string) {
    const element: null | HTMLElement = document.getElementById(code);
    if (element) {
      element.hidden = !element.hidden;
    }
  }

}
