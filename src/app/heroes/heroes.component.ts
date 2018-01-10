import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Hero } from 'app/hero';
import { HeroService } from 'app/hero.service';

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
