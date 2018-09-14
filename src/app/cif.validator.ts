import { FormControl } from '@angular/forms';

export class CifValidator {
    static checkCif(control: FormControl){
        const letras = ['A','B','W']; //Faltan letras
        const primerCr = control.value.charAt(0).toUpperCase();

        if(letras.includes(primerCr)){
            return null;
        } else {
            return {'checkCif': true};
        }

    }
}