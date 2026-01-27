// "use client";
// const ContactUsForm = () => {

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//     };
//     return (
//         <form onClick={handleSubmit}>
//             <input className="tp-input mb-20" type="text" name="name" placeholder="Your name *" />
//             <input className="tp-input mb-20" type="text" name="email" placeholder="Your email *" />
//             <textarea className="tp-input tp-textarea mb-30" name="message" id="textarea" placeholder="Write your message"></textarea>
//             <div className="tp-contact-form-btn">
//                 <button type="submit" className="tp-btn tp-btn-xl d-flex justify-content-center lh-1">
//                     <span>
//                         <span className="text-1">Send Message</span>
//                         <span className="text-2">Send Message</span>
//                     </span>
//                 </button>
//                 <p className="ajax-response mt-20"></p>
//             </div>
//         </form>
//     );
// };

// export default ContactUsForm;

"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { contactUsSchema } from "@/validation/contactFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactUsIFormInput } from "@/types/form-dt";
import toast from "react-hot-toast";

const sendContactForm = async () => {
    // Replace with real API call later if needed
    return Promise.resolve(true);
};
const ContactUsForm = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<contactUsIFormInput>({
        resolver: yupResolver(contactUsSchema),
    });

    const onSubmit: SubmitHandler<contactUsIFormInput> = async () => {
        await sendContactForm();

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
            <div className="mb-20">
                <input
                    className="tp-input"
                    type="text"
                    placeholder="Your name *"
                    {...register("name")}
                />
                {errors.name && <p className="text-danger mt-1">{errors.name.message}</p>}
            </div>

            <div className="mb-20">
                <input
                    className="tp-input "
                    type="email"
                    placeholder="Your email *"
                    {...register("email")}
                />
                {errors.email && <p className="text-danger mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-30">
                <textarea
                    className="tp-input tp-textarea"
                    placeholder="Write your message"
                    {...register("message")}
                />
                {errors.message && <p className="text-danger mt-1">{errors.message.message}</p>}
            </div>

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
        </form>
    );
};

export default ContactUsForm;
