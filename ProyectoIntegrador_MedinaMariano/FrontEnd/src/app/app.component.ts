import { Component } from '@angular/core';
import { PersonaService } from './service/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [PersonaService]
})
export class AppComponent {
  title = 'ProyectoIntegrador_MedinaMariano';
    
}
