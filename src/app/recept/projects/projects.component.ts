import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Angular Mini Project',
      imgSrc: '../assets/img/project1.jpg',
      description:
        'This is a small Angular project that demonstrates basic concepts.',
    },
    {
      title: 'React Dashboard App',
      imgSrc: '../assets/img/project2.jpg',
      description:
        'A dashboard application built with React for data visualization and analytics.',
    },
    {
      title: 'Vue.js ToDo List',
      imgSrc: '../assets/img/project3.jpg',
      description:
        'A simple ToDo list application created using Vue.js framework.',
    },
    {
      title: 'Node.js RESTful API',
      imgSrc: '../assets/img/project4.jpg',
      description:
        'A backend RESTful API built with Node.js and Express for handling CRUD operations.',
    },
    {
      title: 'Full Stack eCommerce Platform',
      imgSrc: '../assets/img/project5.jpg',
      description:
        'An end-to-end eCommerce platform developed with MERN stack (MongoDB, Express.js, React.js, Node.js).',
    },
  ];
}
