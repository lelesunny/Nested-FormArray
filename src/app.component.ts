import { Component } from '@angular/core';

import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: `./src/app.component.html`
})
export class AppComponent {
  trustForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.trustForm = this.fb.group({
      name: '',
      contracts: this.fb.array([])
    });

    this.addContract();
  }

  initContract() {
    return this.fb.group({
      name: '',
      emails: this.fb.array([])
    });
  }

  addContract() {
    const contractArray = <FormArray>this.trustForm.controls['contracts'];
    const newContract = this.initContract();

    contractArray.push(newContract);
  }

  removeContract(idx: number) {
    const contractsArray = <FormArray>this.trustForm.controls['contracts'];
    contractsArray.removeAt(idx);
  }
}