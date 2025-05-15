import React from "react";
import InputField from "@/components/shared/inputs/inputfield";
import PasswordField from "@/components/shared/inputs/passwordfield";
import SelectInput from "@/components/shared/inputs/selectinput";
import CheckBoxInput from "@/components/shared/inputs/checkboxinput";
import DatePickerInput from "@/components/shared/inputs/datepickerinput";
import TimePikerInput from "@/components/shared/inputs/timepikerinput";
import TextAreaInput from "@/components/shared/inputs/textareainput";

const BaseInput = (props) => {
  if (props.type == "select") return <SelectInput {...props} />;
  else if (props.type == "password") return <PasswordField {...props} />;
  else if (props.type == "checkbox") return <CheckBoxInput {...props} />;
  else if (props.type == "datepiker") return <DatePickerInput {...props} />;
  else if (props.type == "timepiker") return <TimePikerInput {...props} />;
  else if (props.type == "textarea") return <TextAreaInput {...props} />;
  else return <InputField {...props} />;
};

export default BaseInput;
