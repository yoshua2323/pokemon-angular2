import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonService } from '../pokemon.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { Pokemon } from '../pokemon.types';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.css']
})
export class PokemonGridComponent implements OnInit {
  pokemons: Pokemon[] = [];
  selectedPokemons = [
    'pikachu', 'charizard', 'bulbasaur', 'squirtle', 'jigglypuff',
    'mewtwo', 'eevee', 'snorlax', 'gengar', 'dragonite',
    'charmander', 'raichu', 'mew', 'vaporeon', 'lapras',
    'scyther', 'alakazam', 'machamp', 'nidoking', 'golem'
  ];

  constructor(private pokemonService: PokemonService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons(this.selectedPokemons).subscribe(data => {
      this.pokemons = data;
    });
  }

  openDialog(pokemon: Pokemon): void {
    this.dialog.open(PokemonDetailComponent, {
      data: pokemon
    });
  }
}
