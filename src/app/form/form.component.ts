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
  lstorage: any;

  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      questions: fb.array([this.questions()]),
    });    
  }

  ngOnInit(): void {
    // this.lstorage = JSON.parse(localStorage.getItem('questionaire')!)
    // for (let i = 0; i<=this.lstorage[0].questions;i++) {
    //     const control = <FormArray>this.form.get('questions');
    //     control.push(this.questions());
    //     if (this.lstorage[0].questions[i].questionType === 'Radio Button') {
    //       const control = <FormArray>this.form.get(['questions', i, 'options']);
    //       control.push(this.options());
    //   }
    // }
    // setTimeout(() => {
    //   this.form.setValue(this.lstorage[0])
    // }, 0);
  }

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
    const control = <FormArray>this.form.get('questions');
    control.push(this.questions());
  }

  deleteQuestion(i:any){
    const control = <FormArray>this.form.get(['questions'])
    control.removeAt(i);
  }
}
