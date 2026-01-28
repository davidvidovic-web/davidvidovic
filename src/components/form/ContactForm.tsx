"use client";
import { budgetOptions, PortfolioTypeOptions } from "@/data/dropdownData";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { contactFormSchema } from "@/validation/contactFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormInput } from "@/types/form-dt";
import NiceSelect from "../ui/NiceSelect";
import toast from "react-hot-toast";
import { useRef } from "react";

const ContactForm = () => {
  const formStartTime = useRef<number>(Date.now());
  const { register, handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm<IFormInput>({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      interested: PortfolioTypeOptions[0].label,
      budget: budgetOptions[0].label,
    },
  });


  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      // Honeypot check
      if (data.honeypot) {
        // Silent fail for bots
        reset();
        return;
      }

      // Time-based check (minimum 3 seconds to fill form)
      const timeTaken = Date.now() - formStartTime.current;
      if (timeTaken < 3000) {
        toast.error("Please take your time filling out the form.");
        return;
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

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
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          padding: "12px 16px",
          fontSize: "15px",
          fontWeight: 500,
        },
        iconTheme: {
          primary: "#ef4444",
          secondary: "#fff",
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate suppressHydrationWarning>
      <div className="tp-contact-form">
        <div className="row">
          {/* Name */}
          <div className="col-lg-6">
            <div className="tp-contact-form-input mb-20">
              <label htmlFor="name" className="tp-label">
                What’s your name?*
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jack Smith"
                className="tp-input"
                {...register("name")}
              />
              {errors.name && <p className="text-danger mt-1">{errors.name.message}</p>}
            </div>
          </div>

          {/* Email */}
          <div className="col-lg-6">
            <div className="tp-contact-form-input mb-20">
              <label htmlFor="email" className="tp-label">
                Enter your email address*
              </label>
              <input
                id="email"
                type="email"
                placeholder="jack.smith@example.com"
                className="tp-input"
                {...register("email")}
              />
              {errors.email && <p className="text-danger mt-1">{errors.email.message}</p>}
            </div>
          </div>

          {/* Interested */}
          <div className="col-lg-6">
            <div className="tp-contact-form-input ">
              <label htmlFor="interested" className="tp-label">
                What service are you interested in?*
              </label>
              <Controller
                name="interested"
                control={control}
                render={({ field }) => (
                  <NiceSelect
                    options={PortfolioTypeOptions}
                    defaultCurrent={0}
                    onChange={(item) => field.onChange(item.value)}
                    cls="tp-select tp-input mb-20"
                    name="interested"
                  />
                )}
              />
              {errors.interested && <p className="text-danger mt-1">{errors.interested.message}</p>}
            </div>
          </div>

          {/* Budget */}
          <div className="col-lg-6">
            <div className="tp-contact-form-input">
              <label htmlFor="budget" className="tp-label">
                What’s your budget?*
              </label>
              <Controller
                name="budget"
                control={control}
                render={({ field }) => (
                  <NiceSelect
                    options={budgetOptions}
                    defaultCurrent={0}
                    onChange={(item) => field.onChange(item.value)}
                    cls="tp-select tp-input mb-20"
                    name="budget"
                  />
                )}
              />
              {errors.budget && <p className="text-danger">{errors.budget.message}</p>}
            </div>
          </div>

          {/* Website */}
          <div className="col-lg-12">
            <div className="tp-contact-form-input mb-20">
              <label htmlFor="website" className="tp-label">
                Do you already have a website?
              </label>
              <input
                id="website"
                type="text"
                placeholder="mywebsite.com"
                className="tp-input"
                {...register("website")}
              />
              {errors.website && <p className="text-danger mt-1">{errors.website.message}</p>}
            </div>

            {/* Message */}
            <div className="tp-contact-form-input mb-20">
              <label htmlFor="message" className="tp-label">
                How can I help you?*
              </label>
              <textarea
                id="message"
                placeholder="Hey! I need to build ......"
                className="tp-input tp-textarea"
                {...register("message")}
              />
              {errors.message && <p className="text-danger mt-1">{errors.message.message}</p>}
            </div>

            {/* Honeypot field - hidden from users */}
            <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
              <label htmlFor="honeypot">Leave this field empty</label>
              <input
                id="honeypot"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("honeypot")}
              />
            </div>

            {/* Submit */}
            <div className="tp-contact-form-btn">
              <button
                type="submit"
                disabled={isSubmitting}
                className="tp-btn tp-btn-xl d-flex justify-content-center lh-1"
              >
                <span>
                  <span className="text-1">{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <span className="text-2">{isSubmitting ? "Sending..." : "Send Message"}</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

