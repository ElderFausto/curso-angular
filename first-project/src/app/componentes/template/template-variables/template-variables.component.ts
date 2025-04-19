import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-template-variables',
  imports: [CommonModule ,NewComponent, NgFor],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent implements AfterViewInit {
  @ViewChild('name') public nameInput!: ElementRef; 

  @ViewChild(NewComponent) public childComponent!: NewComponent;

  ngAfterViewInit() {
      console.log(this.nameInput.nativeElement.value);
      console.log(this.childComponent.name);
  }

}
