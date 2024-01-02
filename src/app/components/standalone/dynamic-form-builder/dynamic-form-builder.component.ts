import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-builder',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.scss']
})
export class DynamicFormBuilderComponent {
  form!: FormGroup;
  formFields = [
    {
      label: 'name',
      type: 'text input'
    },
    {
      label: 'Profile',
      type: 'file upload'
    }
  ];

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.buildForm();
  }

  buildForm(): void {
    const formControls:any = {};
    this.formFields.forEach(field => {
      const validators = field.type === 'text input' ? [Validators.required] : null;
      formControls[field.label] = ['', validators];
    });

    this.form = this.fb.group(formControls);


    console.log(this.form.getRawValue())
  }

  onSubmit(): void {
    // Handle form submission
    if (this.form.valid) {
      // Process the form data
      console.log(this.form.value);
    }
  }
}
