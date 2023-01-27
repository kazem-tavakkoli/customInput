import { AbstractControl} from "@angular/forms";

export function DateLessThan(firstDateField:string,secondDateField:string) {
    const errorName = "dateLessThan";
    return (group: AbstractControl) => {
        const firstDateValue = group.get(firstDateField)?.value;
        const secondDateValue = group.get(secondDateField)?.value;
        if(!firstDateValue || !secondDateValue){
            return { missing:true}
        }

        const firstDate = new Date(firstDateValue);
        const secendDate = new Date(secondDateValue);

        const m = firstDate.getTime();
        const md = secendDate.getTime();
        
        if(firstDate.getTime() >= secendDate.getTime()) {
            const err = {dateLessThan: true};
            group.get(firstDateField)?.setErrors(err);
            return err;
        }else {
            const dateLessError = group.get(firstDateField)?.hasError(errorName);
            if(dateLessError) {
               delete (<any>group).get(firstDateField).errors[errorName];
               group.get(firstDateField)?.updateValueAndValidity();
            }
        }
        return null;
    };
}


export function MustMatch(controlName: string, matchingControlName: string) {
    return (group: AbstractControl) => {
        const control = group.get(controlName);
        const matchingControl = group.get(matchingControlName);

        if (!control || !matchingControl) {
            return null;
        }

        // return if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
            return null;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
        return null;
    }
}