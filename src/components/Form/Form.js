import React from 'react';
import '../../App.css'
import editUser from '../../img/edit-user.svg';
import add from '../../img/icon-add.svg';


export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasErrorName: false,
            hasErrorEmail: false,
            hasErrorBirthdayDate: false,
            hasErrorPhone: false
        }
    }

    validationFields = (e) => {
        e.preventDefault();

        const { name, dateofbirth, email, tel } = this.props.state;

        const validatePhone = /^\(\d{2}\)\d{4,5}-\d{4}$/gi;
        const validateEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
        const validateName = /(?=^.{2,60}$)^[A-ZÀÁÂĖÈÉÊÌÍÒÓÔÕÙÚÛÇ][a-zàáâãèéêìíóôõùúç]+(?:[ ](?:das?|dos?|de|e|[A-Z][a-z]+))*$/;

        let dateMin = new Date(dateofbirth) < new Date('01/01/1900');
        let dateMax = new Date(dateofbirth) > new Date();

        let testName = !validateName.test(name);
        let testPhone = !validatePhone.test(tel);
        let testEmail = !validateEmail.test(email);
        let testBirthdayDate = dateMin || dateMax || dateofbirth === '';

        let errorsFields = [testName, testBirthdayDate, testEmail, testPhone];

        if (testName) { this.setState({ hasErrorName: true }) } else { this.setState({ hasErrorName: false }) }
        if (testPhone) { this.setState({ hasErrorPhone: true }) } else { this.setState({ hasErrorPhone: false }) }
        if (testEmail) { this.setState({ hasErrorEmail: true }) } else { this.setState({ hasErrorEmail: false }) }
        if (testBirthdayDate) { this.setState({ hasErrorBirthdayDate: true }) } else { this.setState({ hasErrorBirthdayDate: false }) }

        errorsFields.forEach(el => { return el });

        let validateFields = errorsFields.filter(err => { if (err) return 'error' });

        if (validateFields.length === 0) {
            this.props.addRecord();
        }
    }


    render() {

        const { name, email, dateofbirth, tel, modeEdit } = this.props.state;
        const { hasErrorName, hasErrorEmail, hasErrorBirthdayDate, hasErrorPhone } = this.state;
        return (
            <>
                <form className={'form-submit'} id="form">
                    <p>
                        <input
                            type="text"
                            placeholder="Fulano da Silva"
                            name="name" data-input="field"
                            value={name}
                            onChange={this.props.getValueInput}
                            required
                            style={
                                hasErrorName ? { border: '1px solid #b62222fd' } : { border: '1px solid #7a48df' }
                            }
                        />
                        <i className={'fa fa-user-o'} style={{ fontSize: '20px' }}></i>
                    </p>

                    <p>
                        <input
                            type="date"
                            placeholder="ano de nascimento"
                            name="dateofbirth"
                            min="1900-10-10"
                            data-input="field"
                            value={dateofbirth}
                            onChange={this.props.getValueInput}
                            required
                            style={
                                hasErrorBirthdayDate ? { border: '1px solid #b62222fd' } : { border: '1px solid #7a48df' }
                            }
                        />
                    </p>

                    <p>
                        <input
                            type="email"
                            placeholder="email@exemplo.com"
                            name="email"
                            data-input="field"
                            value={email}
                            onChange={this.props.getValueInput}
                            required
                            style={
                                hasErrorEmail ? { border: '1px solid #b62222fd' } : { border: '1px solid #7a48df' }
                            }
                        />
                        <i className="fa fa-envelope-o" style={{ fontSize: '20px' }}></i>
                    </p>

                    <p>
                        <input
                            type="tel"
                            placeholder="(xx)xxxxx-xxxx"
                            name="tel"
                            data-input="field"
                            value={tel}
                            style={{ margin: '0px' }}
                            onChange={this.props.getValueInput}
                            required
                            style={
                                hasErrorPhone ? { border: '1px solid #b62222fd' } : { border: '1px solid #7a48df' }
                            }
                        />
                        <i className={'fa fa-mobile-phone'} style={{ fontSize: '24px' }}></i>
                    </p>

                    <button className={'btn btn-add'} onClick={this.validationFields}>
                        {
                            <img src={modeEdit ? editUser : add}
                                title={modeEdit ? 'Editar usuário' : 'adicionar usuário'}
                                alt={modeEdit ? 'Editar usuário' : 'adicionar usuário'} />
                        }
                    </button>
                </form>
            </>
        );
    }
}