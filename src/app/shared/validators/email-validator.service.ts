import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator {

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value
    console.log({ email })

    const httpCallObservable = new Observable<ValidationErrors | null>( (subscriber) => {

      if ( email === 'whatever@gmail.com') {
        subscriber.next( {emailTaken: true })
        subscriber.complete()
      }

      subscriber.next(null)
      subscriber.complete()
    }).pipe(
      delay( 3000 )
    )

    return httpCallObservable
  }



  // validate(control: AbstractControl): Observable<ValidationErrors | null> {

  //   const email = control.value
  //   console.log({ email })

  //   return of({
  //     emailTaken: true
  //   }).pipe(
  //     delay( 2000 )
  //   )
  // }
}

// return this.http.get<any[]>(`http://localhost:3000/users?q=${ email }`)
// .pipe(
//   // delay(3000),
//   map( resp => {
//     return ( resp.length === 0 )
//         ? null
//         : { emailTaken: true }
//   })
// );
