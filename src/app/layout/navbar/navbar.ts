import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Search } from '../../Core/Services/Search/search';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../Core/Services/ThemeService/theme-service';
@Component({
  selector: 'app-navbar',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private readonly search = inject(Search);
  readonly themeService = inject(ThemeService);
  text: WritableSignal<string> = signal('');
  searchTerm(event: any) {
    console.log(event.target.value);
    this.search.text.set(event.target.value);
  }
  toggle(event: any) {
    const isChecked = event.target.checked;
    if (isChecked) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }
}
