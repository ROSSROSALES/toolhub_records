import { useState } from "react";

function LanguageDropDown() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
    <select value={value} onChange={handleChange}>
      <option value="">--Select Example--</option>
      <option value="English">English</option>
      <option value="Spanish">Spanish</option>
      <option value="French">French</option>
      <option value="Arabic">Arabic</option>
      <option value="tooltype">tooltype</option>
      <option value="tooltype">tooltype</option>
      <option value="tooltype">tooltype</option>
    </select>
    </>
  );
};

export default LanguageDropDown;
