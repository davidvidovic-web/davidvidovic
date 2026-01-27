"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface IEmailForm {
  email: string;
}

const EmailForm = () => {
  const { register, handleSubmit, reset } = useForm<IEmailForm>();

  const onSubmit: SubmitHandler<IEmailForm> = async () => {
    
    toast.success("Subscribed successfully!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        padding: "12px 16px",
        fontSize: "15px",
        fontWeight: 500,
      },
      iconTheme: {
        primary: "#4ade80",
        secondary: "#fff",
      },
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="d-flex flex-wrap">
      <input
        type="email"
        placeholder="Email address"
        className="tp-input mr-20 mb-10"
        {...register("email", { required: "Email is required" })}
      />
      <button
        type="submit"
        className="tp-btn mb-10 tp-btn-xl d-inline-flex align-items-center"
      >
        <span>
          <span className="text-1">Subscribe</span>
          <span className="text-2">Subscribe</span>
        </span>
      </button>
    </form>
  );
};

export default EmailForm;
