import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[icon]',
})
export class IconDirective implements OnInit {
  @Input() public weatherCondition!: string;

  constructor(private el: ElementRef) {}

  public ngOnInit(): void {
    const iconPath = this.getIconPath(this.weatherCondition);
    if (iconPath) {
      this.el.nativeElement.innerHTML = `<img class="weather-dir-icon" src="${iconPath}" alt="${this.weatherCondition}" style="width: 100px; height: 100px"/>`;
    }
  }

  private getIconPath(condition: string): string {
    switch (condition) {
      case 'Clouds':
        return 'assets/img/cloud.png';
      case 'Rain':
        return 'assets/img/rainy-weather.png'
      case 'Clear':
        return 'assets/img/clear.png'
      case 'Thunderstorm':
        return 'assets/img/thunderstorm.png'
      case 'Drizzle':
        return 'assets/img/drizzle.png'
      case 'Snow':
        return 'assets/img/snow.png'
      default:
        return 'assets/img/haze.png';
    }
  }
}
