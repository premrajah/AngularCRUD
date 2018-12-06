import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { Directive, Input } from "@angular/core";

@Directive({
  selector: '[appSelectValidator]',
  providers: [{
    provide: NG_VALIDATORS, // opaque token
    useExisting: SelectRequiredValidatorDirective,
    multi: true
  }]
})
export class SelectRequiredValidatorDirective implements Validator {

  // using an alias
  @Input('appSelectValidator') defaultValue: string;  // must have same name as the directive

  // returns object or null
  validate(control: AbstractControl): { [key: string]: any } | null {
    return control.value === this.defaultValue ? { 'defaultSelected' : true } : null;
  }
}
