"use client";
import { budgetOptions, PortfolioTypeOptions } from "@/data/dropdownData";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { contactFormSchema } from "@/validation/contactFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormInput } from "@/types/form-dt";
import NiceSelect from "../ui/NiceSelect";
import toast from "react-hot-toast";

const ContactForm = () => {
  const { register, handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm<IFormInput>({
    resolver: yupResolver(contactFormSchema),
  });


  const onSubmit: SubmitHandler<IFormInput> = async () => {
    //  You can access all form data here
    // Show a success toast
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

