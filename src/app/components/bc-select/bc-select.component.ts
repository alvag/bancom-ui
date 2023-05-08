import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bc-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bc-select.component.html',
  styleUrls: ['./bc-select.component.scss']
})
export class BcSelectComponent {

  @Input() items: any[] = []

}
