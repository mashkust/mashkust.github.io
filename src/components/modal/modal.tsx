import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as ModalStyle } from "@mui/base/Modal";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";
import { setModalOpen } from "../../store/notes-data";
import { AppDispatch } from "../../store/store";
import { Link, Typography } from "@mui/material";
import { forwardRef } from "react";

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
            Уважаемый&nbsp;пользователь, перед&nbsp;тобой
            тестовая&nbsp;TODO'шка.
          </Typography>
          <Typography variant="subtitle1" color="white" fontWeight={600}>
            Переходи на&nbsp;
            <Link
              href="https://career.habr.com/mashkusti"
              underline="none"
              target="_blank"
            >
              мой аккаунт
            </Link>
            &nbsp;на&nbsp;Хабр&nbsp;Карьере для&nbsp;дальнейшего
            знакомства&nbsp;
          </Typography>
        </ModalContent>
      </BaseModal>
    </div>
  );
};

const Backdrop = forwardRef<
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
