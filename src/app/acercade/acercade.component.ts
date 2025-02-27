import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-acercade',
  standalone: false,
  templateUrl: './acercade.component.html',
  styleUrl: './acercade.component.css',
  animations: [
    // Animación de fade para el hero-section
    trigger('fade', [
      state('void', style({ opacity: 0 })), // Estado inicial (invisible)
      transition(':enter', [
        animate('0.5s ease-in-out', style({ opacity: 1 })) // Animación de fade al aparecer
      ])
    ]),

    // Animación de stagger para las cards principales
    trigger('fadeInStagger', [
      transition(':enter', [
        query('.card:not(.song-card)', [ // Excluir las cards internas de canciones
          style({ opacity: 0, transform: 'translateY(-20px)' }), // Estado inicial de cada card
          stagger('100ms', [ // Retraso de 100ms entre cada card principal
            animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),

    // Animación para las canciones dentro de la card "Top Canciones"
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(-10px)' })), // Estado inicial
      transition(':enter', [
        animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })) // Animación de fade al aparecer
      ])
    ])
  ]
})
export class AcercadeComponent {

}
