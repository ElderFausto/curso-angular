import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})

export class TemplateBindingComponent {
  public name = "Elder Fausto"
  public age = 40
  public isDisabled = false;

  public isTextDecoration = this.age >= 32 ? 'underline' : 'none'

  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }

  public onKeyDown(event: any) {
    return console.log(event);
  }

  public onMouseMove(event: any) {
    return console.log(event);
  }
}
