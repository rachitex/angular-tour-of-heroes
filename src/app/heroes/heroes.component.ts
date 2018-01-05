import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // Importing Hero class from hero.ts file.

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }
// OnInit interface has ngOnInit() and ngOnDestroy() for Life hooks of components.
  ngOnInit() {
  }

}
