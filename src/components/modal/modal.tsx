import * as React from "react";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as ModalStyle } from "@mui/base/Modal";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";
import { setModalOpen } from "../../store/wishlists-data";

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const modalOpen = useAppSelector((DATA) => DATA.modalOpen);

  const handleClose = () => {
    dispatch(setModalOpen(false));
  };

  return (
    <div>
      <BaseModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={!!modalOpen}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={{ width: 600 }}>
          <h2 id="unstyled-modal-title" className="modal-title">
            Уважаемый&nbsp;приятель, это&nbsp;славно, что ты нажал на это письмо
            и прочитаешь приглашение еще раз.
          </h2>
          <p id="unstyled-modal-description" className="modal-description">
            Приглашаю на свой день рождения 9-11&nbsp;февраля,
            Микрогород&nbsp;в&nbsp;лесу, пижамная вечеринка. <br /> Все будет в
            лучших традициях 2 курса: курение на&nbsp;балконе, водка, соседи.
            Формат 2-х&nbsp;дневный. <br /> Мне&nbsp;бы очень хотелось провести
            утро субботы&nbsp;с приятелями, картошкой фри и утренним бодрящим
            пивом, перетекающий в&nbsp;вечернюю грустную водку(
          </p>
        </ModalContent>
      </BaseModal>
    </div>
  );
};

const Backdrop = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const BaseModal = styled(ModalStyle)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.background.paper};
    border-radius: 8px;
    border: 1px solid ${theme.palette.background.default};
    box-shadow: 0 4px 12px rgb(0 0 0 / 0.5);
    padding: 24px;
    color: ${theme.palette.success.main};

    & .modal-title {
      margin: 0;
      line-height: 2rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 600;
      color: white;
      margin-bottom: 4px;
    }
  `
);

export default Modal;
