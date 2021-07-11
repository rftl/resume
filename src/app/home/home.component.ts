import {Component, OnInit} from '@angular/core';
import {faBriefcase, faMapMarkerAlt, faPaperPlane} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faMap = faMapMarkerAlt
  faMail = faPaperPlane
  faWork = faBriefcase

  constructor() {
  }

  ngOnInit(): void {
  }

}
