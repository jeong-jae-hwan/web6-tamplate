import React, { useState } from 'react'

//modlues
import { Section } from 'deep-ui-design'

//components
import SEO from 'public/SEO'
import { css } from '@emotion/react'

//
export default function Index() {
  return (
    <>
      <SEO title="템플릿" />
      <Section
        styles={css`
          padding: 60px;
          max-width: 1260px;
        `}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining ce
        the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </Section>
    </>
  )
}
