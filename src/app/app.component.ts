import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-CORS';
  constructor(private http: HttpClient) {}

  hacerPeticion() {
    this.http.get('https://example.com')
      .pipe(
        catchError(error => {
          console.log('Error al hacer la petición:', error.message);
          if (error instanceof HttpErrorResponse && error.status === 0) {
            console.log('Posiblemente sea un error CORS.');
          }
          return of(null);
        })
      )
      .subscribe(data => {
        if (data) {
          console.log(data);
        }
      });
  }
  
  
}
