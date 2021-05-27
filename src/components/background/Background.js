import useColor from "@hooks/useColor";

export default function Background() {
  const { backgroundColor, foregroundColor } = useColor();
  const colorType = [
    {
      name: "HEX",
      value: "hex",
    },
    {
      name: "HEXa",
      value: "hexa",
    },
    {
      name: "RGB",
      value: "rgb",
    },
    {
      name: "RGBa",
      value: "rgba",
    },
    {
      name: "HSL",
      value: "hsl",
    },
    {
      name: "HSLa",
      value: "hsla",
    },
    {
      name: "HSV",
      value: "hsv",
    },
    {
      name: "HSVa",
      value: "hsva",
    },
  ];
  return (
    <section
      style={{ backgroundColor, color: foregroundColor }}
      className="background-colour"
    >
      <div className="p-2">
        <p className="text-xl text-white font-semibold">Background colour</p>
        <div className="control flex space-x-2 my-6">
          <select
            name="background_color"
            id="background_color"
            className="button"
          >
            {colorType.map((color) => (
              <option key={color.value} value={color.value}>
                {color.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            value="rgba(255, 255, 221, 1)"
            className="border border-dotted bg-transparent 
            h-9 w-full sm:w-[340px] text-xl text-center focus:outline-none focus:bg-white focus:text-gray-900 focus:ring-4 ring-gray-700
            font-medium text-white"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button className="bg-white px-1.5 border border-gray-300 button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
          </button>
          <button className="bg-white px-1.5 border border-gray-300 button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </button>
          <button className="bg-white px-1.5 border border-gray-300 button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
            >
              <path d="M18.896 7.104c-.682.6-.753 1.638-.153 2.324l-1.239 1.083-5.416-6.198 1.239-1.082c.599.684 1.638.753 2.32.154l3.246-2.776c.47-.407 1.048-.609 1.625-.609 1.38 0 2.482 1.128 2.482 2.471 0 .73-.322 1.393-.854 1.858l-3.25 2.775zm-6.943 3.896h-2.5l3.562-3.123-1.085-1.24-7.339 6.387c-1.189 1.033-.368 1.831-1.348 3.195-.133.186-.21.372-.231.55-.066.54.325.995.817 1.056.194.023.41-.015.616-.137 1.55-.912 2.178.117 3.396-.947l7.34-6.384-1.081-1.241-2.147 1.884zm-9.106 7.5c-.535 2.053-1.847 2.335-1.847 3.684 0 1.003.834 1.816 1.847 1.816s1.834-.813 1.834-1.816c0-1.349-1.299-1.631-1.834-3.684z" />
            </svg>
          </button>
          <button className="bg-white px-1.5 border border-gray-300 button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
