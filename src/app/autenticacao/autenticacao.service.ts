import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService) { }

  autenticar(usuario: string, senha: string) : Observable<any> {
      return this.httpClient.post(`${API}/user/login`, {
        userName: usuario,
        password: senha
      },
      { observe: 'response' }
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? ''
        this.usuarioService.salvaToken(authToken)
      })
    )
  }
}
