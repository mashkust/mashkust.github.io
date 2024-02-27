import * as React from "react";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as ModalStyle } from "@mui/base/Modal";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";
import { setModalOpen } from "../../store/wishlists-data";
import { AppDispatch } from "../../store/store";
import { Typography } from "@mui/material";

const Modal: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
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
        <ModalContent sx={{ width: 630 }}>
          <Typography variant="h5" fontWeight={600}>
            Уважаемый&nbsp;приятель, это&nbsp;славно, что ты прочитаешь
            приглашение еще раз.
          </Typography>
          <Typography variant="subtitle1" color="white" fontWeight={600}>
            Приглашаю на свой день рождения 9-10&nbsp;февраля,
            Микрогород&nbsp;в&nbsp;лесу, пижамная вечеринка. Все будет в лучших
            традициях 2 курса: курение на&nbsp;балконе, водка, соседи. Формат
            двухдневный. <br /> Мне&nbsp;бы очень хотелось провести утро
            субботы&nbsp;с приятелями, картошкой фри и утренним бодрящим пивом,
            перетекающий в&nbsp;вечернее грустное застолье(
          </Typography>
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
  `
);

export default Modal;
