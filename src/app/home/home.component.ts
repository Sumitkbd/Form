import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    //  DialogComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private dataService: DataService
  ) {
    this.myForm = this.fb.group({
      fullName: [''],
      email: [''],
      password: ['']
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.myForm.valid) {
      this.dialog.open(DialogComponent, {
        data: this.myForm.value
      });
    }
  }

}