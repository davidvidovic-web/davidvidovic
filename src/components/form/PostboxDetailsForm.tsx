"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { IPostboxForm } from "@/types/form-dt";
import toast from "react-hot-toast";

const PostboxDetailsForm = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<IPostboxForm>();

    const onSubmit: SubmitHandler<IPostboxForm> = async () => {
        // Replace with your API call
        // await fetch("/api/comments", { method: "POST", body: JSON.stringify(data) });

        toast.success("Comment submitted successfully!", {
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
            <div className="row">
                {/* Name */}
                <div className="col-xl-6">
                    <div className="postbox-details-input-box mb-20">
                        <div className="postbox-details-input">
                            <label>Name *</label>
                            <input
                                type="text"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <p className="text-danger mt-1">{errors.name.message}</p>}
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div className="col-xl-6">
                    <div className="postbox-details-input-box mb-20">
                        <div className="postbox-details-input">
                            <label>Email *</label>
                            <input
                                type="email"
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
                    </div>
                </div>

                {/* Website */}
                <div className="col-xl-12">
                    <div className="postbox-details-input-box mb-20">
                        <div className="postbox-details-input">
                            <label>Website</label>
                            <input type="text" {...register("website")} />
                        </div>
                    </div>
                </div>

                {/* Comment */}
                <div className="col-xl-12">
                    <div className="postbox-details-input-box">
                        <div className="postbox-details-input">
                            <label>Comment *</label>
                            <textarea
                                id="msg"
                                {...register("comment", { required: "Comment is required" })}
                            ></textarea>
                            {errors.comment && <p className="text-danger mt-1">{errors.comment.message}</p>}
                        </div>
                    </div>
                </div>
            </div>
            {/* Submit Button */}
            <div className="postbox-details-suggetions mb-20">
                <div className="postbox-details-remeber">
                    <input id="remeber" type="checkbox" />
                    <label htmlFor="remeber">Save my name, email, and website in this browser for the next time I comment.</label>
                </div>
            </div>
            <div className="postbox-details-input-box">
                <button disabled={isSubmitting} type="submit" className="tp-btn tp-btn-xl d-none d-md-inline-flex align-items-center">
                    <span>
                        <span className="text-1">{isSubmitting ? "Submitting..." : "Submit Comment"}</span>
                        <span className="text-2">{isSubmitting ? "Submitting..." : "Submit Comment"}</span>
                    </span>
                </button>
            </div>
        </form>
    );
};

export default PostboxDetailsForm;
