// https:formkit.com/essentials/custom-inputs#typescript-support#typescript-support
import type { FormKitInputProps as FormKitInputProps_ } from '@formkit/inputs'

declare module '@formkit/inputs' {
  interface FormKitInputProps<Props extends FormKitInputs<Props>> {
    myRadio: Omit<FormKitInputProps_<Props>['radio'], 'type'> & {
      type: 'myRadio'
    }
  }
  interface FormKitInputProps<Props extends FormKitInputs<Props>> {
    myCheckbox: Omit<FormKitInputProps_<Props>['checkbox'], 'type'> & {
      type: 'myCheckbox'
    }
  }
}
