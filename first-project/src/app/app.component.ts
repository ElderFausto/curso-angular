import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//components
import { NewComponent } from './componentes/new-component/new-component.component';
import { TemplateBindingComponent } from './componentes/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  imports: [NewComponent, TemplateBindingComponent],
  template:  `<!-- <router-outlet />-->
  <h1>Curso angular</h1>
  <app-template-binding/>
  <app-new-component/>
  `,
})
export class AppComponent {
  title = 'meu primeiro projeto';
}