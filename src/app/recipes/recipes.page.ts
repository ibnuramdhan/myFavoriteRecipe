import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] =
 [ {
    id: 'r1',
    title: 'mee goreng',
    imageUrl: 'https://i2.wp.com/angsarap.net/wp-content/uploads/2014/04/mee-goreng-wide.jpg',
    ingredients: ['Mee Kuning', 'Sayur Sawi', 'Cili'],
  },
  {
    id: 'r2',
    title: 'nasi lemak',
    imageUrl: 'https://i.ytimg.com/vi/IUIs4C86Ilo/maxresdefault.jpg',
    ingredients: ['Nasi', 'Santan'],
  }];

  constructor() { }

  ngOnInit() {
  }

}
