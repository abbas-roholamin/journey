import React from "react";

import Form from "next/form";

function SearchForm() {
  return (
    <div>
      <Form action="/fetch-data/db" className="flex gap-2 items-center">
        <input
          type="text"
          className="bg-slate-400 text-white h-full py-2"
          name="query"
        />
        <button type="submit" className="bg-indigo-500 py-2 px-4 rounded">
          search
        </button>
      </Form>
    </div>
  );
}

export default SearchForm;
