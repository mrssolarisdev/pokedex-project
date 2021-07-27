import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  sobre: string[] = [
    '1118  Pokémons em registro',
    'Navegação e uso facilitado, para você matar a curiosidade sobre aquele bichinho o mais rápido possível!',
    'Saiba tudo sobre seu pokémon: nomes, versões, poderes, cores e muito, mas muito mais atributos dos seus pokémons favoritos, estão listados aqui!' ,
    'Busque pelo nome do seu amiguinho ou dê uma olhada na nossa lista pokérecheada!'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
