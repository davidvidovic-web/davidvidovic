"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { SearchIconTwo } from "@/svg/SearchIcon";

interface ISearchForm {
  query: string;
}

const BlogSearch = () => {
  const { register, handleSubmit, reset } = useForm<ISearchForm>();

  const onSubmit: SubmitHandler<ISearchForm> = async () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="tp-blog-sidebar-search-input">
        <input
          type="text"
          placeholder="Search..."
          {...register("query", { required: true })}
        />
        <button type="submit">
          <SearchIconTwo />
        </button>
      </div>
    </form>
  );
};

export default BlogSearch;
