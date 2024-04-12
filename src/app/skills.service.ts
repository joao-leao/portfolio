import { Injectable } from '@angular/core';
import { ISkills, skills } from 'src/app/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: ISkills[] = skills

  constructor() { }

  getAll(){
    return this.skills;
  }
  
}
