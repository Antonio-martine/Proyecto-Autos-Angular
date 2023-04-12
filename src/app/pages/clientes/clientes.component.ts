import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  //Componentes
  clientes: Cliente[] = [];
  cliente = new Cliente();

  constructor(private ClienteService: ClienteService){}


  ngOnInit(): void {
    
    this.ClienteService.getClientes().subscribe(data =>{
      this.clientes = data.map(doc =>{
        return {
          ...doc.payload.doc.data() as Cliente,
          id:doc.payload.doc.id
        }
      });
    });
    
  }

  insertarCliente(){
    this.ClienteService.addCliente(this.cliente);
    this.cliente = new Cliente();
  }

  selectCliente(clienteSeleccionado: Cliente){
    this.cliente = clienteSeleccionado;
  }

  updateCliente(){
    this.ClienteService.updateCliente(this.cliente);
    this.cliente = new Cliente();
  }

  deleteCliente(id:string){
    this.ClienteService.deleteCliente(id);
    this.cliente = new Cliente();
  }

}
