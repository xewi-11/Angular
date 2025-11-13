import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostfilesComponent } from "./components/postfiles.component/postfiles.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostfilesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('juegosangular');
}
