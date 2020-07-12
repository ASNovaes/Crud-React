import React from "react";
import search from "../../img/search.svg";
import user from "../../img/user.svg";

class SearchRecord extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recordSought: "",
      messageNotFound: false,
    };

    this.getValueInput = this.getValueInput.bind(this);
  }

  getValueInput = (e) => {
    const { value } = e.target;

    this.setState({ recordSought: value });

    let search = this.props.records.map((record, i) => {
      let regex = new RegExp("" + value + "", "g" + "i");

      if (
        record.name.toString().match(regex) == null &&
        record.dateofbirth.toString().match(regex) == null &&
        record.email.toString().match(regex) == null &&
        record.tel.toString().match(regex) == null
      ) {
        return false;
      } else {
        return record;
      }
    });

    let filterRecords = search.filter((record) => record !== false);
    this.props.recordSought(filterRecords);

    if (filterRecords.length === 0) {
      this.setState({ messageNotFound: true });
    } else {
      this.setState({ messageNotFound: false });
    }
  };

  render() {
    return (
      <>
        <div className={"container-form-search"}>
          <div className={"form-search"}>
            <div className={"btn btn-search"} id="btn_search">
              <img src={search} title="Pesquisar" alt={"pesquisar"} />
            </div>

            <input
              type="search"
              className={"form-search__bar-search"}
              id="bar_search"
              onChange={this.getValueInput}
            />

            {this.state.messageNotFound ? (
              <p className={"txtNotFound"}>Não Encontrado!</p>
            ) : (
              true
            )}
          </div>
          <div className="counters">
            <div className={"container-form-search__user"}>
              <img src={user} alt={"Countador de Registro"} />
              <span id="countRegister">{this.props.records.length}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchRecord;
