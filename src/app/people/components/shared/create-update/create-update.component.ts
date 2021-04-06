import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Person from 'src/app/core/models/people/person';
import PersonCreateModel from 'src/app/core/models/people/person.create.model';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  personForm = {
    firstName: '',
    lastName: '',
    age: undefined,
    birthday: undefined,
    profession: undefined
  } as PersonCreateModel;

  personFormGroup: FormGroup = new FormGroup({});

  @Input() person?: Person;
  @Output() submited: EventEmitter<PersonCreateModel> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.person) {
      this.personForm = { ...this.person };
    }
    this.personFormGroup = this.formBuilder.group({
      firstName: [
        this.personForm.firstName,
        [Validators.required, Validators.minLength(2), Validators.maxLength(30)]
      ],
      lastName: [
        this.personForm.lastName,
        [Validators.required, Validators.minLength(2), Validators.maxLength(30)]
      ],
      age: [
        this.personForm.age,
        [Validators.min(1), Validators.max(120)]
      ],
      birthday: [
        this.personForm.birthday,
        [Validators.pattern('^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$')]
      ],
      profession: [
        this.personForm.profession,
        [Validators.minLength(2), Validators.maxLength(30)]
      ],
    });
  }

  onSubmit(): void {
    if (this.personFormGroup) {
      this.submited.emit(this.personFormGroup.value);
    }
  }
}
