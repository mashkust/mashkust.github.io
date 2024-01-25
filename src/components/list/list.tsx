import * as React from "react";
import { nanoid } from "nanoid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridToolbarExport,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Fab, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editList, setListOpen } from "../../store/wishlists-data";
import { useAppSelector } from "../../hooks/hooks";

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = nanoid(3);
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        name: "",
        isNew: true,
        // rating: "",
        // link: "",
        // price: null,
        // selected: false,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Добавить желание
      </Button>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

function BaseLinkCell({ value, colDef }: GridRenderCellParams) {
  return (
    <Link href={value} target="_blank">
      {value}
    </Link>
  );
}
const List = ({ id }: any) => {
  const dispatch = useDispatch();
  const wishlists = useAppSelector((DATA) => DATA.wishlists);

  const initialRows: GridRowsProp =
    wishlists.find((wishlist) => wishlist.id === id)?.list || [];

  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [isSave, setIsSave] = useState(false);

  useEffect(() => {
    isSave && dispatch(editList(rows));
    setIsSave(false);
  }, [isSave]);

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
    setIsSave(true);
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    setIsSave(true);
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleBackClick = () => {
    dispatch(setListOpen(null));
  };

  const columns: GridColDef[] = [
    {
      field: "selected",
      headerName: "✓",
      type: "boolean",
      minWidth: 80,
      editable: true,
      filterable: false,
    },
    {
      field: "name",
      headerName: "Название",
      minWidth: 300,
      editable: true,
      sortable: false,
    },
    {
      field: "rating",
      headerName: "★",
      type: "singleSelect",
      minWidth: 50,
      editable: true,
      filterable: false,
      valueOptions: ["1", "2", "3", "4", "5"],
    },
    {
      field: "link",
      headerName: "Ссылка",
      minWidth: 250,
      editable: true,
      type: "link",
      sortable: false,
      filterable: false,
      renderCell: (params) => <BaseLinkCell {...params} />,
    },
    {
      field: "price",
      headerName: "Цена,руб",
      type: "number",
      minWidth: 150,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      minWidth: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box width="100%">
      <Fab
        size="medium"
        color="primary"
        aria-label="back"
        onClick={handleBackClick}
        sx={{ margin: "10px" }}
      >
        <ArrowBackIcon />
      </Fab>
      <Box
        sx={{
          height: 600,
          width: "80%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
          margin: "30px auto 40px auto",
        }}
      >
        <DataGrid
          localeText={{
            noRowsLabel: "Нет данных",
            columnMenuSortAsc: "по возрастанию",
            columnMenuSortDesc: "по убыванию",
            columnMenuManageColumns: "видимость колонок",
            columnMenuHideColumn: "скрыть колонку",
            columnsPanelShowAllButton: "Показать все",
            columnsPanelTextFieldLabel: "Поиск",
            columnsPanelTextFieldPlaceholder: "Введите название колонки...",
            pinToLeft: "Закрепить слева",
            pinToRight: "Закрепить справа",
            unpin: "Открепить",
          }}
          rows={rows}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slots={{
            toolbar: EditToolbar,
          }}
          slotProps={{
            toolbar: { setRows, setRowModesModel },
          }}
        />
      </Box>
    </Box>
  );
};

export default List;
