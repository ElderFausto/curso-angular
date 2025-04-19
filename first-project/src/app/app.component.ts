import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//components
import { NewComponent } from './componentes/new-component/new-component.component';
import { TemplateBindingComponent } from './componentes/template-binding/template-binding.component';
import { TemplateVariablesComponent } from "./componentes/template/template-variables/template-variables.component";
import { TemplateControlFlowComponent } from './componentes/template-control-flow/template-control-flow.component';

@Component({
  selector: 'app-root',
  imports: [NewComponent, 
    TemplateBindingComponent, 
    TemplateVariablesComponent, 
    TemplateControlFlowComponent],
  template:  `<!-- <router-outlet />-->
  <h1>Curso angular</h1>
  <app-template-binding/>
  <app-new-component/>
  <app-template-variables/>
  <app-template-control-flow/>
  `,
})
export class AppComponent {
  title = 'meu primeiro projeto';
}