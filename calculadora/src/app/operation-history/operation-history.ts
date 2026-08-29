import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operation-history',
  imports: [CommonModule],
  templateUrl: './operation-history.html',
  styleUrl: './operation-history.css',
})
export class OperationHistoryComponent {
  @Input() historial: string[] = [];

  @Output() borrar = new EventEmitter<void>();

  borrarHistorial(): void {
    this.borrar.emit();
  }
}