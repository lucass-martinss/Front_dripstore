import './inputLabel.css';

const InputLabel = (
    {
        inputRef, 
        label, 
        inputType, 
        placeHolder, 
        Disabled,
        inputOnChange,
        DefaultValue
    }) => {

    return(
        <div className="inputLabelContainer">
        <div className="labelInput">
          <label htmlFor="">{label}</label>
        </div>

        <input
          className="inputLabel"
          type={inputType}
          ref={inputRef}
          placeholder={placeHolder}
          disabled={Disabled}
          onChange={inputOnChange}
          defaultValue={DefaultValue}
        />
      </div>
    )
}
export default InputLabel;