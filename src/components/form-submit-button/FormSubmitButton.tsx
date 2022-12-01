interface FormSubmitButtonProps {
  text: string;
}

const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({ text }) => {
  return (
    <div className="w-full text-center">
      <button
        className="bg-black/80 hover:bg-black text-white px-20 py-2 rounded"
        type="submit"
      >
        {text}
      </button>
    </div>
  );
};

export default FormSubmitButton;
