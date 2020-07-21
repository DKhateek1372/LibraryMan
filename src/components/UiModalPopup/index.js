import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import '../../styles/common.css';



////Here is one example of class based compoenent global modal for your code ////

class UiModalPopup extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: props.isVisible,
            display: 'none',
            loading: false,
        };
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    renderChildren = (purpose) => {
       switch (purpose) {
            default:
                return (
                    <div className="width100" style={{ background: '#320033' }}>
                        <div className="width100 centerAlign">
                            Here comes your modal title
                </div>

                        <div className="width100 centerAlign">
                            Here comes your content
                </div>
                    </div>
                )
        }
    };
    render() {
        let { purpose, showClose } = this.props;
        return (
            <div className="popup modal">
                <div className="popup_inner modalContent">
                {
                    showClose ? 
                    <button onClick={this.props.closePopup} className="close-popup" style={{ background: '#320033', color: 'white' }}>
                    X
                     </button>
                : null
                }
                <div className="modalBody">
                    {this.renderChildren(purpose)}
                </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    /// fetch your redux state data here//// 
});

const mapDispatchToProps = dispatch => {
    return {
    /// dispatch your action from here to call api and update yours the redux state//// 
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter((UiModalPopup)));
