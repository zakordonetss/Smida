import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})

export class FiltersService {

    constructor(){}

    toppings = new FormControl();
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

    termTypes = new FormControl();
    termTypesList = [];
    setTermTypes() {
        
    }
}