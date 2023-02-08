import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;

  @Input() title!: string;

  @Output() authValue: EventEmitter<any> = new EventEmitter<any>({} as any);

  constructor(
    private fb: FormBuilder
  ) {
  }
  ngOnInit() {
    this.authForm = this.fb.group({
      email: [null],
      password: [null]
    });
  }

  onClick() {
    this.authValue.emit(this.authForm.getRawValue());
  }
}
