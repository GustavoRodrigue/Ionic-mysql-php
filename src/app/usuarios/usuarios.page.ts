import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/services/post';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  usuarios: any = [];
  limit : number = 15;
  start : number = 0;
  nome : string = "";

  constructor(private router: Router, private provider: Post, public toastController: ToastController) { }


  ngOnInit() {
  }

  ionViewWillEnter(){
    this.usuarios = [];
    this.start = 0;
    this.carregar();
  }

  addUsuarios(){
    this.router.navigate(['/add-usuario'])
  }
  carregar(){
    return new Promise(resolve => {
      let dados = {
        requisicao: 'listar',
        nome: this.nome,
        limit : this.limit,
        start : this.start
      };
      this.provider.dadosApi(dados, 'api.php').subscribe(data => {
        for(let usuario of data['result']){
          this.usuarios.push(usuario);
        }
        resolve(true);
      });
    });
  }
  editar(id, nome, usuario, senha, nivel){
    this.router.navigate(['add-usuario/'+id+'/'+nome + '/' + usuario + '/' + senha + '/' + nivel]);
  }

}
