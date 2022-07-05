const Select = ({ options, onChange, ...props }) => {
  return (
    <select onChange={onChange} {...props}>
      <option disabled />
      {
        options.map(option => <option key={option}>{option}</option>)
      }
    </select>
  )
}

export default Select
