export const OutputLocation = ({
  country,
  city,
  loading
}: {
  country: string
  city: string
  loading: boolean
}) => {
  return (
    <output
      className="plasmo-flex plasmo-justify-center plasmo-items-center plasmo-px-6 plasmo-py-4 plasmo-text-xl plasmo-rounded-lg plasmo-border-none plasmo-text-center
    plasmo-shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] plasmo-bg-slate-50 plasmo-text-slate-600 plasmo-font-bold plasmo-min-w-[300px] plasmo-min-h-[50px]">
      {loading ? (
        <svg
          className="plasmo-animate-spin plasmo-h-5 plasmo-w-5 plasmo-text-slate-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            className="plasmo-opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"></circle>
          <path
            className="plasmo-opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>
      ) : (
        <h1>
          Your country is <em className=" plasmo-text-blue-500">{country}</em>{" "}
          and city is <em className=" plasmo-text-blue-500">{city}</em>
        </h1>
      )}
    </output>
  )
}
