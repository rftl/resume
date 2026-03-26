import {Component} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import SkillSet from '../../assets/data/skills.json';
import {Skill} from '../models/data.models';

@Component({
  standalone: true,
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  imports: [FontAwesomeModule]
})
export class SkillsComponent {
  private static readonly unsortedCategories = new Set(['Languages', 'Tools & Other']);

  skillSet: Skill[] = SkillSet.map(group => ({
    ...group,
    skills: SkillsComponent.unsortedCategories.has(group.category)
      ? group.skills
      : [...group.skills].sort((a, b) => a.localeCompare(b))
  }));
}
