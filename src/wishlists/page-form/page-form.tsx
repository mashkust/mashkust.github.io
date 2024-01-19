// import { useMemo } from "react";
// import { useDispatch } from "react-redux";
// import { styled } from "@mui/material/styles";
// import {
//   Button,
//   Box,
//   TextField,
//   Rating,
//   Typography,
//   MenuItem,
//   InputLabel,
//   InputAdornment,
//   Input,
// } from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
//
// import { useAppSelector } from "../../hooks/hooks";
// import {
//   setEditNote,
//   setFormOpen,
//   addNote,
//   setTextFields,
//   editNote,
// } from "../../store/wishlists-data";
//
// // const StyledRating = styled(Rating)({
// //   "& .MuiRating-iconFilled": {
// //     color: "#ab47bc",
// //   },
// //   "& .MuiRating-iconHover": {
// //     color: "#b388ff",
// //   },
// // });
//
const PageForm: React.FC = () => {
  //   const textFields = useAppSelector((DATA) => DATA.wishlists.textFields);
  //   const list = useAppSelector((DATA) => DATA.wishlists.list);
  //
  //   const dispatch = useDispatch();
  //
  //   const { title, description } = textFields;
  //
  //   const getDefaultField = () => {
  //     dispatch(setTextFields({ value: "", name: null }));
  //   };
  //
  //   const btnExitHandler = () => {
  //     getDefaultField();
  //     dispatch(setFormOpen(false));
  //     dispatch(setEditNote(null));
  //   };
  //
  //   const onChangeHandler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
  //     dispatch(
  //       setTextFields({
  //         value: evt.currentTarget.value,
  //         name: evt.currentTarget.name as "title" | "description" | null,
  //       })
  //     );
  //   };
  //
  //   const onConfirm = () => {
  //     if (!title) return;
  //     if (selectedWish) {
  //       dispatch(editNote(selectedWish.id));
  //       dispatch(setEditNote(null));
  //     } else {
  //       dispatch(addNote());
  //     }
  //     getDefaultField();
  //     dispatch(setFormOpen(false));
  //   };
  //
  //   const selectedWish = useMemo(
  //     () => list.find((el: { selected: any }) => el.selected),
  //     [list]
  //   );
  //
  return (
    <></>
    //     <Box
    //       component="form"
    //       width="550px"
    //       margin="60px auto auto auto"
    //       display="flex"
    //       flexDirection="column"
    //       autoComplete="off"
    //     >
    //       <TextField
    //         sx={{
    //           // maxWidth: "50%",
    //           mb: "20px",
    //         }}
    //         id="standard-required"
    //         label="Название*"
    //         placeholder="Например"
    //         variant="standard"
    //         name="title"
    //         value={title}
    //         onChange={onChangeHandler}
    //       />
    //       {/*<TextField*/}
    //       {/*  sx={{*/}
    //       {/*    // maxWidth: "50%",*/}
    //       {/*    mb: "40px",*/}
    //       {/*  }}*/}
    //       {/*  id="standard-required"*/}
    //       {/*  label="Ссылка*"*/}
    //       {/*  placeholder="Например"*/}
    //       {/*  variant="standard"*/}
    //       {/*  // name="title"*/}
    //       {/*  // value={link}*/}
    //       {/*  onChange={onChangeHandler}*/}
    //       {/*/>*/}
    //       <TextField
    //         sx={{
    //           mb: "20px",
    //         }}
    //         id="outlined-multiline-static"
    //         multiline
    //         rows={4}
    //         value={description}
    //         name="description"
    //         label="Комментарий"
    //         placeholder="Введите текст"
    //         fullWidth
    //         onChange={onChangeHandler}
    //       />
    //       {/*<Typography component="legend">Приоритетность</Typography>*/}
    //       {/*<StyledRating*/}
    //       {/*  sx={{*/}
    //       {/*    mb: "20px",*/}
    //       {/*  }}*/}
    //       {/*  name="customized-color"*/}
    //       {/*  defaultValue={5}*/}
    //       {/*  getLabelText={(value: number) =>*/}
    //       {/*    `${value} Heart${value !== 1 ? "s" : ""}`*/}
    //       {/*  }*/}
    //       {/*  precision={0.5}*/}
    //       {/*  icon={<FavoriteIcon fontSize="inherit" />}*/}
    //       {/*  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}*/}
    //       {/*/>*/}
    //       {/*<InputLabel htmlFor="amount">Цена</InputLabel>*/}
    //       {/*<Input*/}
    //       {/*  sx={{*/}
    //       {/*    maxWidth: "30%",*/}
    //       {/*    mb: "20px",*/}
    //       {/*  }}*/}
    //       {/*  id="amount"*/}
    //       {/*  startAdornment={<InputAdornment position="start">₽</InputAdornment>}*/}
    //       {/*/>*/}
    //       <Box
    //         margin="40px 0 0 0"
    //         display="flex"
    //         flexDirection="row"
    //         justifyContent="flex-start"
    //       >
    //         <Button
    //           sx={{
    //             mr: "20px",
    //           }}
    //           variant="text"
    //           onClick={btnExitHandler}
    //         >
    //           Отмена
    //         </Button>
    //         <Button variant="contained" onClick={onConfirm}>
    //           {selectedWish ? "Применить" : "Создать"}
    //         </Button>
    //       </Box>
    //     </Box>
  );
};

export default PageForm;
