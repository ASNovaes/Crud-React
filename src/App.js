import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import SearchRecord from './components/Search/Search.js';
import Table from './components/Table/Table.js';
import Pagination from './components/Pagination/Pagination.js';
import Form from './components/Form/Form.js'
import Trash from './components/Trash/Trash.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: new Date().getTime(),
      name: '',
      dateofbirth: '',
      email: '',
      tel: '',
      records: [],
      objectRenderedRecords: [],
      modeEdit: false,
      pageCurrent: 0,
      recordPerPage: 5,
      overflow: 'content'
    }

    this.getValueInput = this.getValueInput.bind(this);
    this.addRecord = this.addRecord.bind(this);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.deleteAllRecords = this.deleteAllRecords.bind(this);
    this.editRecord = this.editRecord.bind(this);
    this.addEditedRecord = this.addEditedRecord.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.updatepageCurrent = this.updatepageCurrent.bind(this);
    this.recordSought = this.recordSought.bind(this);
  }

  componentDidMount = () => {

    if (!localStorage.getItem('ObjectRecord')) {
      return;
    }

    let ObjectRecord = JSON.parse(localStorage.getItem('ObjectRecord'));
    this.setState({ records: ObjectRecord });

    this.updatepageCurrent(true);
  }


  getValueInput = (e) => {

    const { name, value } = e.target;
    this.setState({ [name]: value });
  }


  addRecord = () => {

    const { id, name, dateofbirth, email, tel, records } = this.state;
    if (this.state.modeEdit) {
      this.addEditedRecord();

    } else {

      this.setState({ id: new Date().getTime() });

      let updateRecords = [...records, { id, name, dateofbirth, email, tel }];

      this.setState({ records: updateRecords });
      localStorage.setItem('ObjectRecord', JSON.stringify(updateRecords));

      this.updatepageCurrent(true);
    }

    this.setState({
      name: '',
      dateofbirth: '',
      email: '',
      tel: ''
    });
  }


  deleteRecord = (id) => {

    let updateRecords = this.state.records.filter(record => record.id !== id);
    this.setState({ records: updateRecords });
    this.setState({ objectRenderedRecords: updateRecords });
    localStorage.setItem('ObjectRecord', JSON.stringify(updateRecords));

    this.updatepageCurrent();
  }


  deleteAllRecords = () => {

    localStorage.removeItem('ObjectRecord');
    this.setState({ records: [] });
    this.setState({ objectRenderedRecords: [] });
    this.setState({ pageCurrent: 0 });
  }


  editRecord = (recordId) => {

    this.setState({ modeEdit: true });
    let ObjectRecord = JSON.parse(localStorage.getItem('ObjectRecord'));

    ObjectRecord.filter(record => {
      if (recordId === record.id) {
        this.setState({
          id: record.id,
          name: record.name,
          dateofbirth: record.dateofbirth,
          email: record.email,
          tel: record.tel

        });
      }
    });
  }


  addEditedRecord = () => {
    let ObjectRecord = JSON.parse(localStorage.getItem('ObjectRecord'));

    let { id, name, dateofbirth, email, tel } = this.state;
    console.log(this.state)
    ObjectRecord.filter((record, index) => {
      if (parseInt(record.id) === parseInt(id)) {

        ObjectRecord.splice(index, 1, { id, name, dateofbirth, email, tel });
        this.setState({ records: ObjectRecord });
        localStorage.setItem('ObjectRecord', JSON.stringify(ObjectRecord));
      }
    });

    this.setState({ name: '', dateofbirth: '', email: '', tel: '' });
    this.setState({ modeEdit: false });
  }


  updatepageCurrent = (lastPage = false) => {
    let ObjectRecord = JSON.parse(localStorage.getItem('ObjectRecord'));
    if (Math.ceil(ObjectRecord.length / this.state.recordPerPage) < this.state.pageCurrent || lastPage) {
      let pageCurrent = Math.ceil(ObjectRecord.length / this.state.recordPerPage);
      this.setState({ pageCurrent: pageCurrent })
      this.updatePage(pageCurrent);

    } else {
      let pageCurrent = this.state.pageCurrent;
      this.updatePage(pageCurrent);
    }
  }


  recordSought = (recordSought) => {
    this.setState({ objectRenderedRecords: recordSought });

    if (recordSought.length <= 5 || this.state.records.length === recordSought.length) {
      this.updatePage(this.state.pageCurrent);
      this.setState({ overflow: 'content' })
    } else {
      this.setState({ overflow: 'content overflow-active' })
    }
  }


  updatePage = (pageCurrent) => {

    this.setState({ pageCurrent: pageCurrent })
    let end = pageCurrent * this.state.recordPerPage;
    let start = end - this.state.recordPerPage;

    let ObjectRecord = JSON.parse(localStorage.getItem('ObjectRecord'));
    let objectRenderedRecords = ObjectRecord.slice(start, end);

    this.setState({ objectRenderedRecords: objectRenderedRecords })
  }

  render() {
    return (

      <div className={'container'} style={{ overflowY: 'hidden' }}>
        <Header />
        <SearchRecord
          records={this.state.records}
          recordSought={this.recordSought}
        />
        <Table
          objectRenderedRecords={this.state.objectRenderedRecords}
          deleteRecord={this.deleteRecord}
          editRecord={this.editRecord}
          overflow={this.state.overflow}
        />
        <Pagination
          state={this.state}
          updatePage={this.updatePage}
        />
        <Form
          state={this.state}
          getValueInput={this.getValueInput}
          addRecord={this.addRecord}
        />
        <Trash
          deleteAllRecords={this.deleteAllRecords}
        />
      </div>
    );
  }
}

