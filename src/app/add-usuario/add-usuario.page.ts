import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/services/post';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

  id: string = "";
  nome: string = "";
  usuario: string = "";
  senha: string = "";
  nivel: string = "";
  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }

  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com Sucesso!',
      duration: 1000
    });
    toast.present();
  }

  ngOnInit() {
    //recupera para editar
    this.actRouter.params.subscribe((data: any) => {
      this.id = data.id;
      this.nome = data.nome;
      this.usuario = data.usuario;
      this.senha = data.senha;
      this.nivel = data.nivel;
    });
  }
  usuarios() {
    this.router.navigate(['/usuarios'])
  }
  cadastrar() {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'add',
        nome: this.nome,
        usuario: this.usuario,
        senha: this.senha,
        nivel: this.nivel
      };
      this.provider.dadosApi(dados, 'api.php').subscribe(data => {
        this.router.navigate(['/usuarios']);
        this.mensagemSalvar();
      });
    });
  }
  editar() {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'editar',
        id: this.id,
        nome: this.nome,
        usuario: this.usuario,
        senha: this.senha,
        nivel: this.nivel
      };
      this.provider.dadosApi(dados, 'api.php').subscribe(data => {
        this.router.navigate(['/usuarios']);
        this.mensagemSalvar();
      });
    });
  }

}
