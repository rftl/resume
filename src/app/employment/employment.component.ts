import {Component, OnInit} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faCaretDown, faCaretRight, faTerminal} from '@fortawesome/free-solid-svg-icons';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import EmploymentJson from '../../assets/data/employment.json';
import {Employment} from '../models/data.models';

@Component({
  standalone: true,
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss'],
  imports: [FontAwesomeModule]
})
export class EmploymentComponent implements OnInit {
  bullet = faTerminal;
  employmentData: Employment[] = [];
  private expandedItems = new Set<string>();

  ngOnInit(): void {
    this.employmentData = EmploymentJson;
    if (this.employmentData.length > 0) {
      this.expandedItems.add(this.employmentData[0].code);
    }
  }

  isExpanded(code: string): boolean {
    return this.expandedItems.has(code);
  }

  getArrowIcon(code: string): IconProp {
    return this.expandedItems.has(code) ? faCaretDown : faCaretRight;
  }

  toggleContent(code: string): void {
    if (this.expandedItems.has(code)) {
      this.expandedItems.delete(code);
    } else {
      this.expandedItems.add(code);
    }
  }
}