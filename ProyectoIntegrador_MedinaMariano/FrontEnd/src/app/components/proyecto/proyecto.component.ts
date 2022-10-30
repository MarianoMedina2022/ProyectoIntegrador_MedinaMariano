import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImagepService } from 'src/app/service/imagep.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyect: Proyecto[] = [];

  constructor(private activatedRouter: ActivatedRoute, private sProyecto: ProyectoService, private tokenService: TokenService,
    public imagepService: ImagepService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void{
    this.sProyecto.lista().subscribe(data =>{this.proyect = data})
  }

  delete(id?: number){
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }
  }

  uploadImagep($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id ;
    this.imagepService.uploadImagep($event, name);
  }



}
