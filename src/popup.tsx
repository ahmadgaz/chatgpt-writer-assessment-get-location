import { useState } from "react"

import { OutputLocation } from "~features/output-location"
import { ShowMyLocationButton } from "~features/show-my-location-button"

import "~style.css"

function IndexPopup() {
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  // Country and city are the two pieces of information we want to display
  const [country, setCountry] = useState<string>("")
  const [city, setCity] = useState<string>("")

  // If we have country and city, and we are not loading or have an error, we can display the location
  const shouldDisplayLocation = country && city

  // This function will be called when the user clicks the button
  const handleFetchLocation = async () => {
    setLoading(true)
    setError("")
    try {
      // Get the user’s IP address by calling a rest API from ipify.org
      const ipResponse = await fetch("https://api.ipify.org?format=json")
      if (!ipResponse.ok) {
        throw new Error("There has been an error.")
      }
      const ipData = await ipResponse.json()
      const ip = ipData.ip

      // Get the user’s location by calling a rest API from ipinfo.io
      const locationResponse = await fetch(
        `https://ipinfo.io/${ip}/geo?token=${process.env.PLASMO_PUBLIC_IPINFO_TOKEN}`
      )
      if (!locationResponse.ok) {
        throw new Error("There has been an error.")
      }
      const locationData = await locationResponse.json()
      const { country, city } = locationData

      // Set the country and city in the state
      setCountry(country)
      setCity(city)
    } catch (err) {
      console.log(err)
      setError("There has been an error.")
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="plasmo-flex plasmo-flex-col plasmo-items-center plasmo-bg-[#f4f4f4] plasmo-justify-center plasmo-min-h-[500px] plasmo-p-20 plasmo-w-[500px]">
      {shouldDisplayLocation && (
        <OutputLocation country={country} city={city} loading={loading} />
      )}
      <label className="plasmo-text-red-400 plasmo-h-6">{error}</label>
      <ShowMyLocationButton
        loading={loading}
        handleFetchLocation={handleFetchLocation}
      />
    </div>
  )
}

export default IndexPopup
