import React from "react";

import style from './status.module.css';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({editMode: true});
  }

  deactivateEditMode = () => {
    this.setState({editMode: false});
    this.props.updateStatus(this.state.status);
  }
  
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  };

  componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			});
		}
	}

  render() {
    return (
      <div className={style.status}>
        Мой статус:
        {!this.state.editMode && 
          <p onDoubleClick={this.activateEditMode} className={style.text}>{this.props.status || "не установлен"}</p>
        }
        {this.state.editMode &&
          <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} className={style.inpt} value={this.state.status} />
        }
      </div>
    );
  }
};

export default ProfileStatus;