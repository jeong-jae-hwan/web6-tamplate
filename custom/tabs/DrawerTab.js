import styled from 'styled-components';

//svg
import DrawerIcon from 'public/icons/drawer-icon.svg';

//
export default function DrawerTab(props) {
  const { onClick, width, fill, m_width } = props;

  const DrewerTabWrap = styled.div`
    padding: 5px 2px;
  `;

  const DrawerTab = styled.button`
    width: ${width};
    //
    display: flex;
    justify-content: center;
    align-items: center;
    //
    user-select: none;
    transition: 0.3s ease-in-out;

    @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
      width: ${m_width};
    }
  `;

  return (
    <DrewerTabWrap>
      <DrawerTab onClick={onClick}>
        <DrawerIcon fill={fill} width={width} />
      </DrawerTab>
    </DrewerTabWrap>
  );
}
