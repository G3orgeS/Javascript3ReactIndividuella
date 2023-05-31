import { json, redirect } from "react-router-dom"


export const newsletterSub = async (subscriberData, setSubscriber) => {
    try {
        console.log(subscriberData)
        console.log(setSubscriber)
      
      const res = await fetch('http://localhost:9999/subscriber', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(subscriberData)
      })
  
      if(res.ok) {
        const data = await res.json()
        setSubscriber(data)
        return redirect('/')
      }
      else {
        const errorMessage = await res.text()
        return json({ message: errorMessage })
      }
  
    } catch (error) {
      console.log(error)
      return json({ message: error.response.data })
    }
  }
  
