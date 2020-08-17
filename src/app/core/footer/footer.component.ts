import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  language: FormControl

  constructor() { 
    this.language = new FormControl({value: 'Brazil', disabled: true}, [
      Validators.required,
    ]);
  }

  ngOnInit() {
  }

}
