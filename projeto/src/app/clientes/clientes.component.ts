import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes = [];
  cliente:Cliente = {
    nome: "",
    idade: 0,
    valor:0,
    data:''
  }

  addCliente(){
    //essa linha a baixo criar um objeto novo a cada vez que a função é executada
     let cli = Object.assign({}, this.cliente);
     this.clientes.push(cli);
  }

  constructor() { }

  ngOnInit() {
  }

}
