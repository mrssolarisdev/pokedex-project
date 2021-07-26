import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  clickedMenuButton: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu():any{
    this.clickedMenuButton = !this.clickedMenuButton;
    console.log(this.clickedMenuButton)
  }
}
