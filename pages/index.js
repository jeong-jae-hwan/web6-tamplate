import React, { useState } from 'react'

//components
import SEO from 'public/SEO'

//styles
import { css, ThemeProvider } from '@emotion/react'
import { Box, Row, View } from 'styles/layout-styled'
import { Text, Title } from 'styles/text-styled'

//custom-style
import Button from 'custom/tabs/Button'
import Snackbar from 'custom/modals/Snackbar'
import ModalSheet from 'custom/modals/ModalSheet'
import Dialog from 'custom/modals/Dialog'

//atoms
import { useRecoilState } from 'recoil'
import { dialogAtom, snackbarAtom } from 'atoms/modal-atom'
import { useRouter } from 'next/router'

//
export default function Index() {
  const router = useRouter()

  const [isDialog, setIsDialog] = useRecoilState(dialogAtom)
  const [isSnack, setIsSnack] = useRecoilState(snackbarAtom)

  console.log(router)

  return (
    <>
      <SEO title="템플릿" />
      <ThemeProvider theme={{ mobile: '600px' }}>
        <View
          css={css`
            max-width: 600px;
            padding: 50px 20px;
          `}
        >
          <Box>
            <Title>sas</Title>
            <Text>
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
            </Text>
          </Box>

          <Row>
            <Button
              onClick={() => {
                setIsDialog(!isDialog)
              }}
            >
              dialog
            </Button>

            <Button
              stroke
              onClick={() => {
                router.push({
                  pathname: '/',
                  query: { detail: 'true' },
                })
              }}
            >
              modalSheet
            </Button>

            <Button
              variant="stroke"
              onClick={e => {
                e.preventDefault()
                setIsSnack(!isSnack)
              }}
            >
              snackbar
            </Button>
          </Row>

          <Dialog
            isActive={isDialog}
            onCancel={() => setIsDialog(false)}
            title="타이틀입니다"
            subTitle={
              '안녕하세요 딥팩토리 입니다. \n 안녕하세요 딥팩토리 입니다.'
            }
          />

          <ModalSheet isActive={router.query.detail} title="타이틀입니다.">
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industrys standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industrys standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industrys standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </ModalSheet>

          <Snackbar />
        </View>
      </ThemeProvider>
    </>
  )
}
