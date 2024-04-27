import { Component } from '@angular/core';
import { NavbarsignComponent } from '../../layout/navbarsign/navbarsign.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [NavbarsignComponent, FooterComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

}
