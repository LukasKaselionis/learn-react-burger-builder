import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';

const withErrorHandler = ( WrrapedComponent, axios ) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            this.reqIncercpetor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })
            this.resIncercpetor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqIncercpetor);
            axios.interceptors.response.eject(this.resIncercpetor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render() {
            return (
                <Auxiliary>
                <Modal 
                    show={this.state.error}
                    modalClosed={this.errorConfirmedHandler} >
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrrapedComponent {...this.props}/>
            </Auxiliary>
            )
        }
    }
}

export default withErrorHandler;