import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';
import { Animais, Animal } from './animais';

const API = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService) { }

  listaUsuario(nomeUsuario: string) : Observable<Animais> {
    return this.httpClient.get<Animais>(`${API}/${nomeUsuario}/photos`)
  }

  buscaPorId(id:number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${API}/photos/${id}`)
  } 

}
