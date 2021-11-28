import * as React from 'react';
import { FieldWrapper } from '@progress/kendo-react-form';
import { Input, MaskedTextBox, NumericTextBox, Checkbox, ColorPicker, Switch, RadioGroup, Slider, SliderLabel, RangeSlider, TextArea, Rating } from '@progress/kendo-react-inputs';

import { Label, Error, Hint, } from '@progress/kendo-react-labels';

import { DropDownList, AutoComplete, ComboBox,  } from '@progress/kendo-react-dropdowns';


export const FormInput = fieldRenderProps => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    hint,
    type,
    optional,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  return <FieldWrapper>
        <Label editorId={id} editorValid={valid} editorDisabled={disabled} optional={optional}>{label}</Label>
        <div className={'k-form-field-wrap'}>
          <Input valid={valid} type={type} id={id} disabled={disabled} ariaDescribedBy={`${hintId} ${errorId}`} {...others} />
          {showHint && <Hint id={hintId}>{hint}</Hint>}
          {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
        </div>
      </FieldWrapper>;
};

export const FormNumericTextBox = fieldRenderProps => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    hint,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  return <FieldWrapper>
        <Label editorId={id} editorValid={valid} editorDisabled={disabled}>{label}</Label>
        <NumericTextBox ariaDescribedBy={`${hintId} ${errorId}`} valid={valid} id={id} disabled={disabled} {...others} />
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
      </FieldWrapper>;
};

export const FormMaskedTextBox = fieldRenderProps => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    hint,
    optional,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  return <FieldWrapper>
        <Label editorId={id} editorValid={valid} optional={optional}>{label}</Label>
        <div className={'k-form-field-wrap'}>
          <MaskedTextBox ariaDescribedBy={`${hintId} ${errorId}`} valid={valid} id={id} {...others} />
          {showHint && <Hint id={hintId}>{hint}</Hint>}
          {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
        </div>
      </FieldWrapper>;
};
export const FormTextArea = fieldRenderProps => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    hint,
    disabled,
    optional,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  return <FieldWrapper>
        <Label editorId={id} editorValid={valid} optional={optional}>{label}</Label>
        <TextArea valid={valid} id={id} disabled={disabled} ariaDescribedBy={`${hintId} ${errorId}`} {...others} />
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
      </FieldWrapper>;
};

export const FormDropDownList = fieldRenderProps => {
    const {
      validationMessage,
      touched,
      label,
      id,
      valid,
      disabled,
      hint,
      wrapperStyle,
      ...others
    } = fieldRenderProps;
    const editorRef = React.useRef(null);
    const showValidationMessage = touched && validationMessage;
    const showHint = !showValidationMessage && hint;
    const hintId = showHint ? `${id}_hint` : '';
    const errorId = showValidationMessage ? `${id}_error` : '';
    const labelId = label ? `${id}_label` : '';
    return <FieldWrapper style={wrapperStyle}>
          <Label id={labelId} editorRef={editorRef} editorId={id} editorValid={valid} editorDisabled={disabled}>
            {label}
          </Label>
          <DropDownList ariaLabelledBy={labelId} ariaDescribedBy={`${hintId} ${errorId}`} ref={editorRef} valid={valid} id={id} disabled={disabled} {...others} />
          {showHint && <Hint id={hintId}>{hint}</Hint>}
          {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
        </FieldWrapper>;
  };
  
export const FormAutoComplete = fieldRenderProps => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    hint,
    wrapperStyle,
    ...others
  } = fieldRenderProps;
  const editorRef = React.useRef(null);
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  const labelId = label ? `${id}_label` : '';
  return <FieldWrapper style={wrapperStyle}>
        <Label id={labelId} editorRef={editorRef} editorId={id} editorValid={valid} editorDisabled={disabled}>
          {label}
        </Label>
        <AutoComplete ariaLabelledBy={labelId} ariaDescribedBy={`${hintId} ${errorId}`} ref={editorRef} valid={valid} id={id} disabled={disabled} {...others} />
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
      </FieldWrapper>;
};
export const FormComboBox = fieldRenderProps => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    hint,
    wrapperStyle,
    ...others
  } = fieldRenderProps;
  const editorRef = React.useRef(null);
  const showValidationMessage = touched && validationMessage;
  const showHint = !showValidationMessage && hint;
  const hintId = showHint ? `${id}_hint` : '';
  const errorId = showValidationMessage ? `${id}_error` : '';
  const labelId = label ? `${id}_label` : '';
  return <FieldWrapper style={wrapperStyle}>
        <Label id={labelId} editorRef={editorRef} editorId={id} editorValid={valid} editorDisabled={disabled}>
          {label}
        </Label>
        <ComboBox ariaLabelledBy={labelId} ariaDescribedBy={`${hintId} ${errorId}`} ref={editorRef} valid={valid} id={id} disabled={disabled} {...others} />
        {showHint && <Hint id={hintId}>{hint}</Hint>}
        {showValidationMessage && <Error id={errorId}>{validationMessage}</Error>}
      </FieldWrapper>;
};
