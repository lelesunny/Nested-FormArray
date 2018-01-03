import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'email',
    templateUrl: './src/email.component.html',
})
export class EmailComponent {
    @Input('group') emailGroup: FormGroup;
}