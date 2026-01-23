import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Search {
  text: WritableSignal<string> = signal('');
}
