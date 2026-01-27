"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface ISearchForm {
    query: string;
}

const SearchForm = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ISearchForm>();

    const onSubmit: SubmitHandler<ISearchForm> = async (data) => {
        // Replace this with your actual search logic or API call
        // await fetch(`/api/search?q=${data.query}`);

        toast.success(" Your search request has been submitted!", {
            style: {
                borderRadius: "12px",
                background: "#1a1a1a",
                color: "#f8f8f8",
                padding: "14px 20px",
                fontSize: "16px",
                fontWeight: 600,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            },
            iconTheme: {
                primary: "#4ade80",
                secondary: "#fff",
            },
            duration: 4000,
        });

        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="tp-search-form-input">
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    {...register("query", { required: "Please enter a search term" })}
                />
                <span className="tp-search-focus-border"></span>
                <button className="tp-search-form-icon" type="submit" disabled={isSubmitting}>
                    <i className="fa-sharp fa-regular fa-magnifying-glass"></i>
                </button>
                {errors.query && <p className="text-danger mt-1">{errors.query.message}</p>}
            </div>
        </form>
    );
};

export default SearchForm;
