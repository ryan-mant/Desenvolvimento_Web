import { Component } from '@angular/core';
import Produto from './models/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public produtos: Produto[] = new Array<Produto>();

  constructor() {
    this.produtos.push(new Produto("X-Bacon Picanha",
                                    "https://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/traillerdoserginho/109_55afcf792d36d.jpg",
                                    "Lanche artesanal contendo bacon e dois hamburgueres de picanha",
                                    17.99));
    this.produtos.push(new Produto("X-Vegano",
                                    "https://www.greenme.com.br/wp-content/uploads/2020/11/hamburguer-vegano.jpg",
                                    "Contém maionese de Soja, queijo mussarela de Mandioquinha e Hamburguer de Lentilha",
                                    22.99));
    this.produtos.push(new Produto("Monster Burguer",
                                    "https://www.blackpoolgazette.co.uk/webimg/QVNIMTE3MDQyMDgy.jpg",
                                    "Contém 6 carnes bovinas, nosso melhor molho caseiro, cebola empanada e muito queijo",
                                    29.99));
    this.produtos.push(new Produto("X-Cheddar",
                                    "https://temperonapanela.com.br/wp-content/uploads/28_05-blog.png",
                                    "Contém 2 carnes bovinas, bacon, *MUITA* cheddar e nosso molho secreto",
                                    24.99));
  }

}
