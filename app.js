const express = require('express')
const app = express()
const port = 9000
const cors = require('cors');

app.use(cors());
app.get('/review', (req, res) => {
  console.log(req);
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
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(rows));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})