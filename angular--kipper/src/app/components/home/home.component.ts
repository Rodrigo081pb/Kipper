import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {
  nome = "Leo";

  ViwTitle = false


  submit(){
    console.log("sucesso")
  }
}
