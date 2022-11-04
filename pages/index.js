import React, { useState } from 'react'

//components
import SEO from 'public/SEO'

//styles
import styles from 'styles/home.module.css'
import { ThemeProvider } from '@emotion/react'
import { View } from 'scss/layout-styled/View'

//custom-style
import Button from 'custom/tabs/Button'
import AlartDialog from 'custom/modals/AlartDialog'
import ModalSheet from 'custom/modals/ModalSheet'
import AlartSnackbar from 'custom/modals/AlartSnackbar'
import Picture from 'custom/imgs/Picture'

//atoms
import { useRecoilState } from 'recoil'
import { modalStateAtom } from 'atoms/layout'
import Photo from 'custom/imgs/Photo'

//
export default function Index() {
  const theme = {
    mobile: '600px',
  }

  const [modalActive, setIsModalActive] = useRecoilState(modalStateAtom)
  const [isDialog, setIsDialog] = useState(false)
  const [isSheet, setIsSheet] = useState(false)
  const [isSnack, setIsSnack] = useState(false)

  return (
    <>
      <SEO title="템플릿" />
      <ThemeProvider theme={theme}>
        <section>
          <View
            maxWidth="600px"
            paddingTop="50px"
            paddingBottom="80px"
            paddingLR="20px"
            m_paddingTop="20px"
            gap="30px"
          >
            <Photo
              src="https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/2edbc04e-9895-4311-9e9b-29cceab51600/public"
              alt=""
              borderRadius="10px"
              aspect="16/11"
              m_marginTop="10px"
              imageWidth={200}
              imageHeight={100}
            />

            <div className={styles.wrapper}>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it? It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using Content here, content here making it
              look like readable English. Many desktop publishing packages and
              web page editors now use Lorem Ipsum as their default model text,
              and a search for lorem ipsum will uncover many web sites still in
              their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose injected humour and
              the like). Where does it come from? Contrary to popular belief,
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature from 45 BC, making it over 2000 years
              old. Richard McClintock, a Latin professor at Hampden-Sydney
            </div>

            <div className={styles.tabbox}>
              <Button
                width="100%"
                onClick={() => {
                  setIsDialog(!isDialog)
                  setIsModalActive(true)
                }}
              >
                dialog
              </Button>

              <Button
                variant="stroke"
                width="100%"
                onClick={() => {
                  setIsSheet(!isSheet)
                  setIsModalActive(true)
                }}
              >
                modalSheet
              </Button>

              <Button
                variant="stroke"
                width="100%"
                onClick={() => {
                  setIsSnack(!isSnack)
                  setIsModalActive(true)
                }}
              >
                snackbar
              </Button>
            </div>

            <AlartDialog
              isActive={isDialog}
              isCancel={() => {
                setIsDialog(!isDialog)
                setIsModalActive(false)
              }}
              isSubmit={() => {
                setIsDialog(!isDialog)
                setIsModalActive(false)
              }}
              title="타이틀입니다"
              subTitle={
                '안녕하세요 딥팩토리 입니다. \n 안녕하세요 딥팩토리 입니다.'
              }
            />

            <ModalSheet
              gap="10px"
              paddingLR="20px"
              isActive={isSheet}
              isCancel={() => {
                setIsSheet(!isSheet)
                setIsModalActive(false)
              }}
            >
              <h1>타이틀</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industrys
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industrys standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </ModalSheet>

            <AlartSnackbar
              isActive={isSnack}
              isCancel={() => {
                setIsSnack(!isSnack)
                setIsModalActive(false)
              }}
            >
              <p>비밀번호가 일치하지 않습니다</p>
            </AlartSnackbar>
          </View>
        </section>
      </ThemeProvider>
    </>
  )
}
