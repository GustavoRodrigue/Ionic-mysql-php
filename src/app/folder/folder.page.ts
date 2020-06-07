import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Post } from 'src/services/post';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  nome: string = "";
  nivel: string = "";
  dadosLogin: any;

  constructor(private storage: NativeStorage, private router: Router, private provider: Post, public toast: ToastController) { }

  ngOnInit() {
    //this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  ionViewWillEnter() {
    this.storage.getItem('session_storege').then((res) => {
      this.dadosLogin = res;
      this.nome = this.dadosLogin.nome;
      this.nivel = this.dadosLogin.nivel;
    });
  }
  logout() {
    this.storage.clear();
    this.router.navigate(['/login']);
  }

}
