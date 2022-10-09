import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hardyskills',
  templateUrl: './hardyskills.component.html',
  styleUrls: ['./hardyskills.component.css']
})
export class HardyskillsComponent implements OnInit {
  skill: Skills[] = [];

  constructor(private skills: SkillsService, private tokenService: TokenService) {}
    isLogged = false;


  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.skills.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }
  delete(id: number){
    if(id != undefined){
      this.skills.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}
