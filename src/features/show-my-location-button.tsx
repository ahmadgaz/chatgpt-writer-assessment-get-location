export const ShowMyLocationButton = ({
  loading,
  handleFetchLocation
}: {
  loading: boolean
  handleFetchLocation: () => void
}) => {
  return (
    <button
      onClick={handleFetchLocation}
      type="button"
      className="plasmo-flex plasmo-flex-row plasmo-items-center plasmo-px-4 plasmo-py-2 plasmo-text-sm plasmo-rounded-lg plasmo-transition-all plasmo-border-none
      plasmo-shadow-lg hover:plasmo-shadow-md
      active:plasmo-scale-105 plasmo-bg-slate-50 hover:plasmo-bg-slate-100 plasmo-text-slate-800 hover:plasmo-text-slate-900">
      {loading ? (
        <>
          <svg
            className="plasmo-animate-spin plasmo-h-5 plasmo-w-5 plasmo-mr-3 plasmo-text-slate-500"
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
          Loading...
        </>
      ) : (
        <>Show my location</>
      )}
    </button>
  )
}
