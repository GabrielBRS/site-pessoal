import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-consultoria',
  standalone: true,
  imports: [FooterComponent, RouterModule],
  templateUrl: './consultoria.component.html',
  styleUrl: './consultoria.component.scss'
})
export class ConsultoriaComponent {

}
