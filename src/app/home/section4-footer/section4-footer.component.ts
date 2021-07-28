import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section4-footer',
  templateUrl: './section4-footer.component.html',
  styleUrls: ['./section4-footer.component.css']
})
export class Section4FooterComponent implements OnInit {

  addressData: string[] = ['PokeSolutions, Brazil','Vila Aurora - 312','Rua Banana Split 335']
  contactData: string[] = ['Telefone: (87) 3462-3563','pokedexonline.com.br','email: contact@pokedexproject.com']
  speechData: string = "A PokéDex Online é um trabalho da Visio Project visando fornecer a maior biblioteca Pokémon do mundo. Utilizando a biblioteca PokéApi, a PokéDex online fornece dados sobre 1118 pokémons existentes, poderes, formas, dieta e muito mais. "
  constructor() { }

  ngOnInit(): void {
  }

}
