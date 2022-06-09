import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Animais } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  animais!: Animais

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService
  ) { }

  ngOnInit(): void {
    this.usuarioService.retornauUsuario().subscribe((usuario) => {
      const userName = usuario.name ?? ''
      this.animaisService.listaUsuario(userName).subscribe((animais) => {
        this.animais = animais
      })
    })
  }

}
