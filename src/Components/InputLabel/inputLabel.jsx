import './inputLabel.css';

const InputLabel = (
    {
        classCss,
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
          className={classCss}
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