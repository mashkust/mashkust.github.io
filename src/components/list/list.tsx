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
  GridToolbarProps,
  ToolbarPropsOverrides,
} from "@mui/x-data-grid";
import { Fab } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { editList, setListOpen } from "../../store/notesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Note, Todo } from "../../shared/type";

const EditToolbar = (props: GridToolbarProps & ToolbarPropsOverrides) => {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = nanoid(3);
    setRows((oldRows: GridRowsProp) => [
      ...oldRows,
      {
        id,
        name: "",
        isNew: true,
      },
    ]);
    setRowModesModel((oldModel: GridRowModesModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleClick}
        data-testid="add-todo"
      >
        Добавить
      </Button>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

const List: FC<Note> = ({ id }) => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((DATA) => DATA.notes);
  // const isLoading = useAppSelector((DATA) => DATA.isLoading);

  const getRows = () => {
    return (notes.find((note) => note.id === id)?.todoList ||
      []) as GridRowsProp;
  };

  const [rows, setRows] = useState(getRows());
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [isSave, setIsSave] = useState(false);

  useEffect(() => {
    if (isSave) dispatch(editList(rows as Todo[]));
    setIsSave(false);
  }, [isSave]);

  // useEffect(() => {
  //   setRows(getRows());
  // }, [isLoading]);

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
      width: 130,
      editable: true,
      filterable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Название",
      width: 300,
      editable: true,
      sortable: false,
    },
    {
      field: "description",
      headerName: "Описание",
      type: "singleSelect",
      width: 1000,
      editable: true,
      sortable: false,
    },
    {
      field: "rating",
      headerName: "Приоритет",
      type: "singleSelect",
      width: 200,
      editable: true,
      filterable: false,
      valueOptions: ["1", "2", "3", "4", "5"],
    },
    {
      field: "actions",
      type: "actions",
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
              data-testid="save-todo"
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
              data-testid="cancel-todo"
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
            data-testid="delete-todo"
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
        sx={{ marginBottom: "30px" }}
      >
        <ArrowBackIcon />
      </Fab>
      <Box
        m="0 auto"
        mb={8}
        sx={{
          height: 600,
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
        }}
      >
        <DataGrid
          localeText={{
            noRowsLabel: "Нет данных",
            columnMenuSortAsc: "по возрастанию",
            columnMenuSortDesc: "по убыванию",
            columnMenuManageColumns: "видимость колонок",
            columnMenuHideColumn: "скрыть колонку",
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
