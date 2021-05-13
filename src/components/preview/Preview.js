import React from "react";

export default function Preview() {
  return (
    <div className="ample-preview">
      <details className="bg-gray-200">
        <summary className="text-lg font-semibold px-2 py-1.5">
          Sample preview
        </summary>
        <div className="p-2 flex space-x-2 items-center justify-center pb-5">
          <input
            type="text"
            value="Sample text and something new"
            className="border border-dotted bg-blue-600 block min-w-0 h-12  px-4 text-xl text-center
            focus:outline-none  focus:ring-4 ring-gray-700 font-medium"
          />
          <div className="border border-dotted bg-blue-600 h-12 flex items-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          </div>
        </div>
      </details>
    </div>
  );
}
