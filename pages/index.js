import React, { useState } from 'react'

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
  return (
    <>
      <SEO title="템플릿 웹 페이지" />
      <Section>
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
        <Sec5 />
        <Sec6 />
      </Section>
    </>
  )
}
