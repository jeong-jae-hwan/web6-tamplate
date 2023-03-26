import React, { useRef, useState } from 'react'

//modlues
import { Section } from 'deep-ui-design'

//components
import SEO from 'public/SEO'
import Sec1 from '@/components/home/sec1'
import Sec2 from '@/components/home/sec2'
import Sec3 from '@/components/home/sec3'
import Sec4 from '@/components/home/sec4'
import Sec5 from '@/components/home/sec5'
import Sec6 from '@/components/home/sec6'

//
export default function Index() {
  const contectRef = useRef()

  const handleFocus = i => {
    contectRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <>
      <SEO title="템플릿 웹 사이트" />
      <Section>
        <Sec1 handleFocus={handleFocus} />
        <Sec2 />
        <Sec3 />
        <Sec4 handleFocus={handleFocus} />
        <Sec5 />
        <Sec6 contectRef={contectRef} />
      </Section>
    </>
  )
}
