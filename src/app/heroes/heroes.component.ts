import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // Importing Hero class from hero.ts file.
import { HEROES } from '../mock-heroes'; // Importing Heroes from mock-heroes.ts file

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
/*
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
*/
  selectedHero: Hero;


  constructor() { }
// OnInit interface has ngOnInit() and ngOnDestroy() for Life hooks of components.
  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
