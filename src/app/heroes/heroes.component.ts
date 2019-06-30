import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  newHero: Hero;
  editHero: Hero;
  heroes: Hero[];
  expandedList: boolean;
  heroCreatorVisible: boolean;
  heroEditorVisible: boolean;
  nextId: number;


  constructor() {
    this.heroes = HEROES;
    this.expandedList = true;
    this.heroCreatorVisible = false;
    this.heroEditorVisible = false;

    this.newHero = new Hero(this.retrieveNextId(), '');
  }

  ngOnInit() {}

  /**
   * Acciones del evento click sobre un héroe.
   *
   * @param heroID ID del héroe seleccionado
   */
  onSelectHero(heroID: number) {
    // Prueba: comprueba que el nombre de héroe es correcto
    alert(this.getHeroByID(heroID).name);
    // TODO: generar formualario de edición con los datos del héroe
  }

  /**
   * Alterna la apertura/cierre de la lista de héroes.
   */
  toggleExpandedList() {
    this.expandedList = !this.expandedList;
  }

  /**
   * Alterna la apertura/cierre del panel de edición de héroes.
   */
  toggleHeroCreator() {
    this.heroCreatorVisible = !this.heroCreatorVisible;
  }

  /**
   * Alterna la apertura/cierre del panel de edición de héroes.
   */
  toggleHeroEditor() {
    this.heroEditorVisible = !this.heroEditorVisible;
  }

  /**
   * Acciones del evento click del botón de crear héroe
   */
  onCreateHeroButton() {
    // Crear heroe


    // CIerra menú creación
    this.toggleHeroCreator();
  }

  /**
   * Acciones del evento click del botón de editar héroe
   */
  onEditHeroButton() {
    // Editar héroe


    // Cierra menú edición
    this.toggleHeroEditor();
  }

  /**
   * Obtiene la siguiente ID con la que generar a un nuevo héroe.
   */
  retrieveNextId(): number {
    return this.heroes.reduce((max, h) => max.id > h.id ? max : h).id + 1;
  }

  // Obtiene un héroe por valor de ID.
  getHeroByID(id: number) {
    return this.heroes.filter((h) => h.id === id)[0];
  }

}

