import { DirectionsRenderer, GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import React, { useRef, useState } from 'react'

export default function MyMap() {
    const center = { lat: 21.1702, lng: 72.8311 }


    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAnuZgJsageUVqd1gnMsbdhOdYhKi--uPg",
        libraries: ['places'],
    })

    const [map, setMap] = useState(/** @type google.maps.Map */(null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()

    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()

    if (!isLoaded) {
        return <div> Map Not Loded</div>
    }

    async function calculateRoute() {
        if (originRef.current.value === '' || destiantionRef.current.value === '') {
            return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destiantionRef.current.value,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        })
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    function clearRoute() {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destiantionRef.current.value = ''
    }



    return (
        <div className='w-screen h-screen absolute'>
            <GoogleMap
                center={center}
                zoom={14}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                options={{
                    zoomControl: true,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                    disableDefaultUI: true,
                    // styles: customMapStyles

                }}
                onLoad={map => setMap(map)}
            >
                <Marker position={center} />


                {
                    directionsResponse && (
                        <DirectionsRenderer directions={directionsResponse} />
                    )

                }



            </GoogleMap>
        </div>
    )
}
