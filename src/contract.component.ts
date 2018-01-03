import { Component, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
    selector: 'contract',
    templateUrl: './src/contract.component.html',
})
export class ContractComponent {
    @Input('group') contractGroup: FormGroup;

    constructor(private fb: FormBuilder) { }

    addEmail() {
        const emailArray = <FormArray>this.contractGroup.controls['emails'];
        const newEmail = this.initEmail();

        emailArray.push(newEmail);
    }

    removeEmail(idx: number) {
        const emailArray = <FormArray>this.contractGroup.controls['emails'];
        emailArray.removeAt(idx);
    }

    initEmail() {
        return this.fb.group({
            text: ''
        });
    }
}