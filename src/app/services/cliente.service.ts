import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private firestore: AngularFirestore) { }

  getClientes(){
    return this.firestore.collection('clientes').snapshotChanges();
  }
  
  
  addCliente(cliente: Cliente){
    return this.firestore.collection('clientes').add(Object.assign({},cliente));
  }

  updateCliente(cliente:Cliente){
    this.firestore.doc('clientes/'+cliente.id).update(cliente);
  }

  deleteCliente(clienteId:string){
    this.firestore.doc('clientes/'+clienteId).delete();
  }

}
