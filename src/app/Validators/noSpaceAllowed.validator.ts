import { AbstractControl, FormControl } from "@angular/forms";

export class CustomValidators{
   


  static noSpaceAllowed(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value != null && control.value.indexOf(' ') >= 0) {
      return { 'noSpaceAllowed': true };
    }
    return null;
  }


    static checkUserName(control: AbstractControl): Promise<any>{
        return userNameAllowed(control.value);
    }
}

function userNameAllowed(username: string){
    const takenUserNames = ['johnsmith', 'manojjha', 'sarahking'];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(takenUserNames.includes(username)){
                resolve({checkUsername: true});
            }
            else{
                resolve(null);
            }
        }, 5000);
    });
}