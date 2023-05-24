import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-1000px)', opacity: 0 }),
        animate(
          '0.8s ease-out',
          style({ transform: 'translateX(0px)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0px)', opacity: 1 }),
        animate(
          '0.8s ease-in',
          style({ transform: 'translateX(1000px)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class Page1Component implements OnInit {
  public show1 = true;
  public timer = setInterval(() => {
    this.show1 = !this.show1;
  }, 5000);

  constructor() {}

  ngOnInit(): void {}

  scrollToElement(element): void {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  clickSlider(direction): void {
    this.show1 = !this.show1;
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.show1 = !this.show1;
    }, 5000);
  }
}
