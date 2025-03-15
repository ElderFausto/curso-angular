import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})

export class TemplateBindingComponent {
  public name = "Elder Fausto"
  public age = 28
  public isDisabled = false;
}
