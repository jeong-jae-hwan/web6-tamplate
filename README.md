  const isMobile = useSelector(({ mediaQ }) => mediaQ.isMobile)
  const isTablet = useSelector(({ mediaQ }) => mediaQ.isTablet)

  useEffect(() => {
    const mediaQuery = () => {
      if (window.innerWidth <= 1260) {
        dispatch(activeTablet())
      }

      if (window.innerWidth <= 600) {
        dispatch(activeMobileQ())
      }
    }

    window.addEventListener('resize', mediaQuery)

    return () => {
      window.removeEventListener('resize', mediaQuery)
      mediaQuery()
    }
  }, [isMobile, isTablet])
