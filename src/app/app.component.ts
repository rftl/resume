import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faHome, faFileAlt, faCode, faIdCardAlt, faCaretSquareRight, faCaretSquareLeft} from '@fortawesome/free-solid-svg-icons';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterLink, RouterLinkActive, RouterOutlet, FontAwesomeModule, NgOptimizedImage]
})
export class AppComponent {
  title = 'resume';
  faHome = faHome;
  faFile = faFileAlt;
  faCode = faCode;
  faEmp = faIdCardAlt;
  menuActive = true;

  getMenuState(): IconProp {
    return this.menuActive ? faCaretSquareLeft : faCaretSquareRight;
  }
}
