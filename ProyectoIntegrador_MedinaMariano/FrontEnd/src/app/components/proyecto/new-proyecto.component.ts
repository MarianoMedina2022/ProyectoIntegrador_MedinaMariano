import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImagepService } from 'src/app/service/imagep.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})

  export class NewProyectoComponent implements OnInit {
    nombreP: string = '';
    descripcionP: string = '';

    constructor(private activatedRouter: ActivatedRoute,private sProyecto: ProyectoService, private router: Router,
      public imagepService: ImagepService) { }

    ngOnInit(): void {
    }

    onCreate(): void {
      const proy = new Proyecto(this.nombreP, this.descripcionP);
      this.sProyecto.save(proy).subscribe(data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })}

    uploadImagep($event:any){
      const id = this.activatedRouter.snapshot.params['id'];
      const name = "proyecto_" + id ;
      this.imagepService.uploadImagep($event, name);
    }

  }
