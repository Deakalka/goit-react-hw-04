const ErrorMessage = ({message = "An error occurred while fetching data."}) => {
    return (
      <p style={ {color: 'red', fontSize:20}}>{message}</p>
    )
  }
  
  export default ErrorMessage;