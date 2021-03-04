import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pessoas = [];
  onAdicionarPessoa (pessoa){
    this.pessoas = [pessoa, ...this.pessoas];
  }



}


