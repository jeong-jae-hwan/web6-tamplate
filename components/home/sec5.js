import React, { useEffect, useState } from 'react'

//style
import styled from '@emotion/styled'
import { AlartSnackbar } from 'deep-ui-design'
import { css } from '@emotion/react'

//
export default function Sec5({ contectRef }) {
  const [isValues, setIsValues] = useState({
    name: '',
    email: '',
    tel: '',
    text: '',
  })

  const [isAlart, setIsAlart] = useState(false)

  const { name, email, tel, text } = isValues

  const handleOnChange = e => {
    const { name, value } = e.target
    setIsValues({ ...isValues, [name]: value })
  }

  // 숫자 하이픈 핸들러
  useEffect(() => {
    if (tel.length === 11) {
      setIsValues({
        ...isValues,
        tel: tel.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      })
    }
  }, [tel])

  // 제출
  const onSubmit = e => {
    e.preventDefault()
    setIsAlart(true)
    setIsValues({ ...isValues, name: '', email: '', tel: '', text: '' })
  }

  return (
    <>
      <View ref={contectRef} data-aos="fade">
        <Form onSubmit={onSubmit}>
          <Info>
            <strong>문의하기</strong>
            <p>
              문의하기 템플릿 기능을 사용하여,
              <br /> 문의하기 기능을 만들어보세요!
            </p>
          </Info>

          <Label>이름</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleOnChange}
            placeholder="이름을 입력하세요."
          />

          <Label>이메일</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="이메일을 입력하세요."
          />

          <Label>연락처</Label>
          <Input
            type="text"
            name="tel"
            maxLength={11}
            value={tel}
            onChange={handleOnChange}
            placeholder="-제외하여 입력하세요."
          />

          <Label>문의하기</Label>
          <TextArea
            type="text"
            name="text"
            value={text}
            onChange={handleOnChange}
            placeholder="문의 내용을 입력하세요."
            rows={6}
          />

          <Tabs>
            <span>※ 답변은 2~3일 정도 소요됩니다.</span>
            <button
              type="submit"
              disabled={(name && email && tel && text) === ''}
            >
              제출하기
            </button>
          </Tabs>
        </Form>
      </View>

      <AlartSnackbar view={isAlart} onCancel={() => setIsAlart(false)}>
        <p
          css={css`
            font-size: 14px;
            color: #797979;
          `}
        >
          ✅ 제출이 완료되었습니다.
        </p>
      </AlartSnackbar>
    </>
  )
}

//styled
const View = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 120px;
  transition: 0.3s ease-in-out;

  @media (max-width: 600px) {
    padding-bottom: 80px;
  }
`

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 50px;
  border-radius: 6px;
  border: 1px solid #531f78;
  box-shadow: 0 1px 20px rgba(61, 24, 87, 0.5);
  display: flex;
  flex-direction: column;
  transition: 0.3s ease-in-out;

  @media (max-width: 640px) {
    border: none;
    padding: 50px 20px 0;
    box-shadow: none;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    row-gap: 14px;
    margin-bottom: 30px;
  }

  strong {
    font-size: 28px;

    @media (max-width: 1080px) {
      font-size: 24px;
    }

    @media (max-width: 600px) {
      font-size: 22px;
    }
  }

  p {
    font-size: 16px;
    color: #aaa;
    text-align: center;
    line-height: 1.3;

    @media (max-width: 640px) {
      font-size: 14px;
    }
  }
`

const Label = styled.label`
  font-size: 13px;
  color: #888;
`

const Input = styled.input`
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid #525252;
  font-size: 15px;
  margin-bottom: 24px;

  &::placeholder {
    color: #777;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 15px;
  border: 1px solid #525252;
  border-radius: 6px;
  margin-top: 8px;

  &::placeholder {
    color: #777;
  }
`

const Tabs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 14px;
  margin-top: 40px;

  span {
    color: #999;
    font-size: 14px;
  }

  button {
    width: 260px;
    font-size: 16px;
    background-color: #3d1857;
    padding: 16px;
    border-radius: 100px;
    color: #fff;

    &:hover {
      background-color: #34144b;
    }

    &:disabled {
      background-color: #251034;
    }

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
`
