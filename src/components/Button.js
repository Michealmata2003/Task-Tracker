import PropTypes from 'prop-types'

export const Button = ({ color, text }) => {
  return (
    <div>
      <button style={{ backgroundColor: color }} className="btn">{text}</button>

    </div>
  )
}

export const AddButton = ({ color, text,onAdd }) => {
  return (
    <div>
      <button onClick={onAdd} style={{ backgroundColor: color }} className="btn">{text}</button>

    </div>
  )
}

Button.defaultProps = {
  color: 'steelblue'
};

Button.Propstype = {
  text: PropTypes.string,
  color: PropTypes.string,

}

