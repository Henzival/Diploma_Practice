import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-general-button',
  templateUrl: './general-button.component.html',
  styleUrl: './general-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralButtonComponent {
  @Input() buttonText = '';
}
