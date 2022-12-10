import React, { useEffect, useState } from "react";

import style from './status.module.css';

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status);
  }, [props.status] );

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={style.status}>
      Мой статус:
      { !editMode &&
        <p onDoubleClick={activateEditMode} className={style.text}>{props.status || "не установлен"}</p>
      }
      { editMode &&
        <input onChange={onStatusChange} value={status} onBlur={deactivateEditMode} autoFocus className={style.inpt} />
      }
    </div>
  );
};

export default ProfileStatusWithHooks;