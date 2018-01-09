import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // Importing Hero class from hero.ts file.
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
/*
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
*/
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }
// OnInit interface has ngOnInit() and ngOnDestroy() for Life hooks of components.
  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
