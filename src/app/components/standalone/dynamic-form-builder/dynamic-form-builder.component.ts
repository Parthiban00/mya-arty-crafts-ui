import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-dynamic-form-builder',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.scss']
})
export class DynamicFormBuilderComponent {
  uploadedFileProfile: Array<any> = [];
  profileFileURL: string | ArrayBuffer | null = '';
  form!: FormGroup;

  formFields = [
    {
      label: 'Name',
      control: 'name',
      type: 'text input',
      isRequired: true,
      placeholder: 'Name'
    },
    {
      label: 'Upload Photo',
      control: 'fileUpload',
      type: 'file upload',
      isRequired: false,
      placeholder: 'Upload File'
    }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    const formControls: any = {};
    this.formFields.forEach(field => {
      // const validators = field.type === 'text input' ? [Validators.required] : null;
      const validators = field.isRequired ? [Validators.required] : null;
      formControls[field.control] = ['', validators];

      if (field.type === 'file upload') {
        formControls[field.control + '_base64'] = [''];
      }
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


  onBasicUpload(ev: any, fieldControl: string) {
    const file = ev.files[0];

    this.uploadedFileProfile.push(file);

    // Dynamically patch the value based on the fieldLabel variable
    this.form.get(fieldControl)?.patchValue(file);

    const fileDetails: any = [{
      type: file.type,
      size: file.size,
      name: file.name
    }]

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      fileDetails[0].url = reader.result;
      // this.profileFileURL = reader.result;

      this.form.get(fieldControl + '_base64')?.patchValue(reader.result);
    };
  }

  onFileRemove(fieldControl: string) {
    // Dynamically reset the form control value and set the flag
    this.form.patchValue({ [fieldControl]: '', profileFileRemoved: true, [fieldControl + '_base64']: '' });
  }
}
