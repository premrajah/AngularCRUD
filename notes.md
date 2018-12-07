# Skip Test files
ng new project-name --skip-tests true
ng g c folder_name/component-name --spec false --flat true
# --flat true = no folder 

# base href element 
Development build = /
ng serve -o (open) --base-href /path/

#e.g. Production path
ng build -prod --base-href /path/

# Forms
<!-- Template Driven forms  -->
<!-- Model Driven forms (reactive forms)  -->


# Template reference variable starts with #someName

# Forms
ngForm 
[(ngModel)]=""
(ngSubmit)=""

# ngx-bootstrap / angular.io/resources
step1: npm install ngx-bootstrap --save
step2: npm install bootstrap@3/bootstrap --save
step3: add bootstrap stylesheet to the project

step4: import module
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

# Native validation
ngNativeValidate

# Angular form validation 
- touched/untouched 
- pristine/dirty
- valid/invalid 

# to get access to the form properties 
variable="ngModel" 

# Local/Template variable
starts with a #varName

# Class binding
[class.class-name]="condition"

# Angular safe navigators operator 
e.g. *nfIf="email.errors?.required"

# value and ngValue directive 
id the value is null or object use ngValue 

#ngModelGroup directive
can only be used as a child of ngForm directive

conditional class / group binding

# updateValueAndValidity() 
function to trigger a form controls validation
e.g:  (change)="confirmPassword.control.updateValueAndValidity()" triggered after loosing focus
      (input)="confirmPassword.control.updateValueAndValidity()" triggered while typing

# Angular service
the service always need to have the @Injectable() decorator above the class
import from 
#import { Injectable } from "@angular/core";

# Angular switch case
ngSwitch
ngSwitchCase
ngSwitchDefault

#Input() decorator
@Input() decorator to pass data from parent to child

#Input property chang detection
Property setter / ngOnChanges life cycle hook
OnChanges import from @angular/core 
SimpleChanges import from @angular/core

#@Output property (EventEmmiter)
