import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  qType: any = ['Short Question', 'Long Question', 'Radio Button'];
  form: FormGroup;
  id: number = 0;
  flag: boolean = false;

  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      questions: fb.array([this.questions()]),
    });
  }

  ngOnInit(): void { }

  submit(f: any) {
    localStorage.setItem('questionaire', JSON.stringify(f));
  }

  options() {
    return this.fb.group({
      optionTitle1: [],
      optionTitle2: [],
    });
  }

  questions() {
    return this.fb.group({
      questionTitle: [],
      questionType: [],
      options: this.fb.array([
        // this.options()
      ]),
    });
  }

  getQuestions(form: any) {
    return form.controls.questions.controls; // console.log(form.controls);
  }

  getOptions(form: any) {
    return form.controls.options.controls; //  console.log(form.get('options').controls);
  }

  questionType(event: any, i: any) {
    const control = <FormArray>this.form.get(['questions', i, 'options']);
    if (event.value === 'Radio Button') control.push(this.options());
  }

  addQuestion() {
    const control = <FormArray>this.form.get('questions'); // this.question.push(this.fb.control('', Validators.required));
    control.push(this.questions());
  }
}
