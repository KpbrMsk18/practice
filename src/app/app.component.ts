import {Component, OnInit} from '@angular/core';
import {EntityCollectionService, EntityServices} from "@ngrx/data";
import {Hero} from "./hero";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private heroService: EntityCollectionService<Hero>;
  loading$: Observable<boolean>;
  heroes$: Observable<Hero[]>;
  isEditing = false;
  hero: Hero;

  constructor(entityServices: EntityServices) {
    this.heroService = entityServices.getEntityCollectionService<Hero>('Hero');
    this.loading$ = this.heroService.loading$;
    this.heroes$ = this.heroService.entities$;
  }

  ngOnInit() {
    this.heroService.getAll().subscribe(
      () => console.log('エンティティを取得しました。'),
      err => console.error(`エンティティの取得に失敗しました。: ${err}`)
    );
  }

  deleteHero(id: number) {
    const hero = <Hero>{ id };
    this.heroService.delete(hero).subscribe(() => console.log('削除しました'),
        err => console.error(`エンティティの削除に失敗しました: ${err}`))
  }

  beginEdit(id?: number, name?: string) {
    this.isEditing = true;
    this.hero = <Hero>{id, name};
  }

  endEdit() {
    this.isEditing = false;
    this.hero = <Hero>{}
  }

  addHero(hero: Hero) {
    this.heroService.add(hero).subscribe(
      () => console.log('追加しました'),
      err => console.error(`追加失敗しました ${err}`),
      () => this.endEdit()
    );
  }
  updateHero(hero: Hero) {
    this.heroService.update(hero).subscribe(
      () => console.log('更新しました'),
      err => console.error(`更新に失敗しました: ${err}`),
      () => this.endEdit()
    )
  }

}
