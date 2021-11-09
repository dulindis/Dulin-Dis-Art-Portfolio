import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import emailjs from 'emailjs-com';
import Button from '../../components/button/button.component';
import './form.styles.scss';

 
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
  const { name, email, subject, message } = data;
  try {
      console.log(      process.env
);
    const templateParams = {
      name,
      email,
      subject,
      message
    };
    await emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_USER_ID
    );
    reset();
    toastifySuccess();
  } catch (e) {
    console.log(e);
  }
};

  return (
    <div className="ContactForm">
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="input-field">
          {" "}
          <input
            type="text"
            name="name"
            {...register("name", {
              required: { value: true, message: "Please enter your name" },
              maxLength: {
                value: 30,
                message: "Please use 30 characters or less",
              },
            })}
            className="form-control formInput"
            placeholder="Name"
          ></input>
        </div>
        <div className="input-field">
          <input
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            className="form-control formInput"
            placeholder="Email address"
          ></input>

          {errors.name && (
            <span className="errorMessage">{errors.name.message}</span>
          )}

          {errors.email && (
            <span className="errorMessage">
              Please enter a valid email address
            </span>
          )}
        </div>

        <div className="input-field">
          <input
            type="text"
            name="subject"
            {...register("subject", {
              required: { value: true, message: "Please enter a subject" },
              maxLength: {
                value: 75,
                message: "Subject cannot exceed 75 characters",
              },
            })}
            className="form-control formInput"
            placeholder="Subject"
          ></input>
          {errors.subject && (
            <span className="errorMessage">{errors.subject.message}</span>
          )}
        </div>
        <div className="input-field">
          <textarea
            rows={3}
            name="message"
            {...register("message", {
              required: true,
            })}
            className="form-control formInput textfield"
            placeholder="Message"
          ></textarea>

          {errors.message && (
            <span className="errorMessage">Please enter a message</span>
          )}
        </div>

        {/* <button className="submit-btn" type="submit">
          Submit
        </button> */}

        <Button className="button" btnColor='grey' theme='outline' type='submit'>send mesage</Button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default ContactForm;
