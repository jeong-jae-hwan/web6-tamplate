import { css } from '@emotion/react'
import DrawerTab from 'custom/tab-icons/stroke/drawer-tab'
import React from 'react'
import { Box, Tab, Text, Title, View } from 'scss/layout-styled/View'

export default function ViewTest() {
  return (
    <View>
      <Box css={styles.view}>
        <Title css={styles.h1}>ddd</Title>
        <Text>sadsd</Text>

        <Tab>버튼</Tab>

        <DrawerTab style={styles.button} />
      </Box>
    </View>
  )
}

const styles = {
  view: css`
    width: 100%;
    padding: 20px;
  `,

  h1: css`
    font-size: 20px;
  `,

  button: css`
    width: 20px;
    height: 20px;
  `,
}
