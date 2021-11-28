
import { getter } from '@progress/kendo-react-common';

export const requiredValidator = value => value ? "" : "Error: This field is required.";

export const zeroValidator = value => value && value > 1? '' : 'Stats must be higher then zero';



const  hpgetter = getter('hp');
const maxHpgetter= getter('maxHp');
const  managetter = getter('mana');
const maxManagetter= getter('maxMana');

/* export const hpValidator = values => {
    //const hp = hpgetter(values);
    const maxHp = maxHpgetter(values);
    return (value<maxHp)?"":"Hp must be less then maxHp"
} */
export const formValidator = values => {
    const hp = hpgetter(values);
    const maxHp = maxHpgetter(values);
    const mana = managetter(values);
    const maxMana = maxManagetter(values);
    let err="";
    let ret={};
    if (hp>=maxHp ) {
      err="HP must be less then MaxHp"
    }else if (mana>=maxMana ) {
            err="MP must be less then MaxMp"}
    
  
    if (err!=="") {
        ret= {
        VALIDATION_SUMMARY: err,
      };};
      return ret;
  };