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

  private readonly careerStart = new Date(2015, 4, 1);

  get yearsOfExperience(): number {
    const now = new Date();
    let years = now.getFullYear() - this.careerStart.getFullYear();
    const anniversary = new Date(now.getFullYear(), this.careerStart.getMonth(), this.careerStart.getDate());
    if (now < anniversary) {
      years--;
    }
    return years;
  }
}
