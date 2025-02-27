import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    // Animación de fade para el hero-section
    trigger('fade', [
      state('void', style({ opacity: 0 })), // Estado inicial (invisible)
      transition(':enter', [
        animate('0.5s ease-in-out', style({ opacity: 1 })) // Animación de fade al aparecer
      ])
    ]),

    // Animación de fadeIn con retraso para las cards
    trigger('fadeInStagger', [
      transition(':enter', [
        query('.card', [
          style({ opacity: 0, transform: 'translateY(-20px)' }), // Estado inicial de cada card
          stagger('100ms', [ // Retraso de 100ms entre cada card
            animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent {

}
