import { Component, OnInit } from '@angular/core';
import SkillSet from '../../assets/data/skills.json';
import {Skill} from "../models/data.models";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillSet: Skill[];

  constructor() { }

  ngOnInit(): void {
    this.skillSet = SkillSet;
  }

}
