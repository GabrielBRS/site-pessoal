import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dev-wiki',
  standalone: true,
  imports: [RouterModule, FooterComponent],
  templateUrl: './dev-wiki.component.html',
  styleUrl: './dev-wiki.component.scss'
})
export class DevWikiComponent {

}
