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