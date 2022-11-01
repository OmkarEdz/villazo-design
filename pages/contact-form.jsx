import React, { useState, useEffect } from "react"

const ContactForm = ({
  global
}) => {
  return (
    <>
      <h1>Omkar</h1>
    </>
  )
}

export async function getStaticProps(props) {
  // Run API calls in parallel
  const [
    globalRes
  ] = await Promise.all([
    fetchAPI("/global", { populate: "*" })
  ])

  return {
    props: {
      global: globalRes.data
    },
    revalidate: 1,
  }
}

export default ContactForm
