import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import ReviewDetail from './review_detail';
import LocationList from './location_list';
import ReviewWrite from './review_writing';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import {
  renderEditRating,
  renderRating,
} from '@mui/x-data-grid-generator/renderer';
const CustomToolbar = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEl} />
  </GridToolbarContainer>
);
const columns = [
  {
    field: 'id',
    headerName: 'ID',
    type: 'string',
  },
  {
    field: 'stationName',
    headerName: '충전소명',
    type: 'string',
  },
  {
    field: 'content',
    headerName: '내용',
    type: 'string',
    width: 200,
  },
  {
    field: 'rating',
    headerName: '별점',
    renderCell: renderRating,
    renderEditCell: renderEditRating,
    type: 'number',
    width: 200,
  },
  {
    field: 'userName',
    headerName: '작성자',
    type: 'string',
  },
  {
    field: 'registDate',
    headerName: '작성일',
    type: 'date',
    valueGetter: ({ value }) => value && new Date(value),
  },
];

const rows = [
  {
    id: 1,
    stationName: 1,
    content: 'Snow',
    rating: 5,
    userName: 'Jon',
    registDate: '2022-01-01',
  },
  {
    id: 2,
    stationName: 2,
    content: 'Lannister',
    rating: 5,
    userName: 'Cersei',
    registDate: '2022-01-01',
  },
  {
    id: 3,
    stationName: 2,
    content: 'Lannister',
    rating: 5,
    userName: 'Jaime',
    registDate: '2022-01-01',
  },
  {
    id: 4,
    stationName: 4,
    content: 'Stark',
    rating: 5,
    userName: 'Arya',
    registDate: '2022-01-01',
  },
  {
    id: 5,
    stationName: 3,
    content: 'Targaryen',
    rating: 4,
    userName: 'Daenerys',
    registDate: '2022-01-01',
  },
  {
    id: 6,
    stationName: 6,
    content: 'Melisandre',
    rating: 5,
    userName: null,
    registDate: '2022-01-01',
  },
  {
    id: 7,
    stationName: 7,
    content: 'Clifford',
    rating: 5,
    userName: 'Ferrara',
    registDate: '2022-01-01',
  },
  {
    id: 8,
    stationName: 8,
    content: 'Frances',
    rating: 2,
    userName: 'Rossini',
    registDate: '2022-01-01',
  },
  {
    id: 9,
    stationName: 11,
    content: 'Roxie',
    rating: 3,
    userName: 'Harvey',
    registDate: '2022-01-01',
  },
];

function Review() {
  const [filterButtonEl, setFilterButtonEl] = useState(null);
  const [detailVisible, setDetailVisible] = useState(false);
  const [listVisible, setListVisible] = useState(false);
  const [writingVisible, setWritingVisible] = useState(false);
  const selectedRow = useRef({
    stationName: '',
    content: '',
    rating: 5,
    userName: '',
    registDate: '',
  });
  const handleClickContent = useCallback((params, event) => {
    if (params.field === 'content') {
      selectedRow.current = params.row;
      setDetailVisible(true);
    }
  }, []);
  const handleClickWriteReview = useCallback((params, event) => {
    setListVisible(true);
  });
  const handleSelectLocation = useCallback((visible, event) => {
    setWritingVisible(visible);
  }, []);
  return (
    <Box
      sx={{
        m: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '10px 40px',
        width: '100vm',
      }}
    >
      <div style={{ alignSelf: 'self-start', paddingLeft: '20px' }}>
        <h2>리뷰 조회</h2>
        <Button onClick={handleClickWriteReview}>새 리뷰 작성</Button>
      </div>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          components={{
            Toolbar: CustomToolbar,
          }}
          componentsProps={{
            panel: {
              anchorEl: filterButtonEl,
            },
            toolbar: {
              setFilterButtonEl,
            },
          }}
          onCellClick={handleClickContent}
        />
      </div>
      <ReviewDetail
        isShow={detailVisible}
        data={selectedRow.current}
        setVisible={setDetailVisible}
      />
      <LocationList
        isShow={listVisible}
        setVisible={setListVisible}
        onClickOk={handleSelectLocation}
      />
      <ReviewWrite
        isShow={writingVisible}
        data={selectedRow.current}
        setVisible={setWritingVisible}
      />
    </Box>
  );
}

export default Review;
