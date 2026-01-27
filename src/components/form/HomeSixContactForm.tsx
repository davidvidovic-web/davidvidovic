"use client";

import { contactUsIFormInput } from "@/types/form-dt";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const HomeSixContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<contactUsIFormInput>();

  const onSubmit: SubmitHandler<contactUsIFormInput> = async () => {
    // Replace this with real API call
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });

    toast.success("Message sent successfully!", {
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Name */}
      <div className="tp-contact-form-input mb-15">
        <label className="tp-label" htmlFor="name">Name *</label>
        <input
          id="name"
          type="text"
          className="tp-input"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="text-danger mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div className="tp-contact-form-input mb-15">
        <label className="tp-label" htmlFor="email">Email *</label>
        <input
          id="email"
          type="email"
          className="tp-input"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && <p className="text-danger mt-1">{errors.email.message}</p>}
      </div>

      {/* Message */}
      <div className="tp-contact-form-input mb-15">
        <label className="tp-label" htmlFor="message">Message *</label>
        <textarea
          id="message"
          className="tp-input tp-textarea"
          {...register("message", { required: "Message is required" })}
        ></textarea>
        {errors.message && <p className="text-danger mt-1">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="tp-btn tp-btn-xl d-inline-flex align-items-center justify-content-center w-100"
        >
          <span>
            <span className="text-1">{isSubmitting ? "Sending..." : "Send Message"}</span>
            <span className="text-2">{isSubmitting ? "Sending..." : "Send Message"}</span>
          </span>
        </button>
      </div>
    </form>
  );
};

export default HomeSixContactForm;
