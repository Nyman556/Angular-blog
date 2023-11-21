import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastService } from 'src/app/services/toastr.service';

@Component({
  selector: 'app-about-me-contact-form',
  templateUrl: './about-me-contact-form.component.html',
})
export class AboutMeContactFormComponent {
  constructor(private ToastService: ToastService) {}
  public ContactForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    Email: new FormControl(''),
    PhoneNumber: new FormControl(''),
    Message: new FormControl(''),
  });
  public onSubmit() {
    console.log(this.ContactForm.value);
    this.ToastService.success('Message sent!');
    this.ContactForm.reset();
  }
}
