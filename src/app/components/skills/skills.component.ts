import { Component, OnInit } from '@angular/core';
import { ISkills } from 'src/app/skills';
import { SkillsService } from 'src/app/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
  skills: ISkills[] | undefined;

  constructor(
    private skillsService: SkillsService
  ) { }

  ngOnInit(): void {
    this.skills = this.skillsService.getAll();
  }

}
