interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <p className="text-red-500" role="alert">
      {message}
    </p>
  );
};

export default ErrorMessage;
