import { Component, OnInit } from '@angular/core';
import { IProjects } from 'src/app/projects';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  projects: IProjects[] | undefined;

  constructor(
    private projectsSevice: ProjectsService
  ) { }

  ngOnInit(): void {
    this.projects = this.projectsSevice.getAll();
  }

}
