import { Component } from '@angular/core';
import { UsuarioDTO } from '../../models/usuario.dto';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {
  knowledgeList = ['Buscando en Google', 'Recomendación de un amigo', 'Por mi profesor'];
  sexList = ['Hombre', 'Mujer', 'Otro'];
  usuario = new UsuarioDTO('', '', '', '', '', '', '', '', '');
  submitted = false;

  constructor() {}

  addUsuario() {
    console.log(this.usuario);
    this.submitted = true;
  }

}
