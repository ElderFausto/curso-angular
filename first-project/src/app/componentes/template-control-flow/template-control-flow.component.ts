import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-control-flow',
  imports: [CommonModule, NgIf],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public isTrue = false;
  
}
