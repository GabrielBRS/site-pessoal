import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aula',
  standalone: true,
  imports: [FooterComponent, RouterModule],
  templateUrl: './aula.component.html',
  styleUrl: './aula.component.scss'
})
export class AulaComponent {

}
