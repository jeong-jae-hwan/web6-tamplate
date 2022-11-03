import React, { useState } from 'react'

//components
import SEO from 'public/SEO'

//styles
import { ThemeProvider } from '@emotion/react'
import { View } from 'scss/layout-styled/View'
import { ErrorMsg } from 'scss/input-styled/ErrorMsg'
import { Label } from 'scss/input-styled/Label'
import { OverlapTab } from 'scss/input-styled/OverlapTab'
import { InputBox } from 'scss/input-styled/InputBox'

//custom_styles
import Checkbox from 'custom/inputs/Checkbox'

//
export default function Join() {
  const theme = {
    mobile: '500px',
  }

  const [isCheck, setIsCheck] = useState(false)

  const [val1, setVal1] = useState('')
  const [val2, setVal2] = useState('')

  return (
    <>
      <SEO title="회원가입" />
      <ThemeProvider theme={theme}>
        <section>
          <View
            maxWidth="500px"
            paddingTop="50px"
            paddingBottom="80px"
            paddingLR="20px"
          >
            <Checkbox
              id="ss"
              checked={isCheck}
              onChange={() => setIsCheck(!isCheck)}
            >
              children
            </Checkbox>

            <Label>sss</Label>
            <InputBox>
              <input
                rows={1}
                type="text"
                placeholder="입력하세요"
                value={val1}
                onChange={e => setVal1(e.target.value)}
              />
              <OverlapTab>안녕하세여</OverlapTab>
            </InputBox>
            <ErrorMsg isActive={true}>sss</ErrorMsg>
          </View>
        </section>
      </ThemeProvider>
    </>
  )
}
