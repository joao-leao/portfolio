import { Injectable } from '@angular/core';
import { IProjects, projects } from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: IProjects[] = projects

  constructor() { }

  getAll(){
    return this.projects;
  }
}