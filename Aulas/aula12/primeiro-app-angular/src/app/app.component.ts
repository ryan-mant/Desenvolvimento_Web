import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mensagem: string = "Olá angular";
  public nome: string= "fulano";
  public idade: Number= 29;
  public profissao: string= "Dev Java";

  
  public listarAnimais= [{nome: "Bob",raca: "Labrador",peso: 24},
  {nome: "Achorro",raca: "SRD",peso: 10},
  {nome: "Grandel",raca: "Doberman",peso: 17},
  {nome: "Ruth",raca: "Poodle",peso: 3}]
}
