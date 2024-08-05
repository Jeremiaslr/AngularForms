import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const product = {
  name: 'ProductName',
  price: 1500,
  inStorage: 10
}

@Component({
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent implements OnInit {

  //public myForm: FormGroup = new FormGroup({
  //  name: new FormControl('', [], []),
  //  price: new FormControl(0, [], []),
  //  inStorage: new FormControl(0, [], []),
  //})

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    price: [0, [ Validators.required, Validators.min(0) ]],
    inStorage: [0, [ Validators.required, Validators.min(0) ]]
  })

  constructor( private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset( product )
  }

  onSave(): void {

    if (this.myForm.invalid) return

    console.log(this.myForm.value)

    this.myForm.reset({ price: 0, inStorage: 0 })
  }

}
