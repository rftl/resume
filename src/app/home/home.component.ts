import {Component} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faBriefcase, faMapMarkerAlt, faPaperPlane} from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [FontAwesomeModule]
})
export class HomeComponent {
  faMap = faMapMarkerAlt;
  faMail = faPaperPlane;
  faWork = faBriefcase;
}
