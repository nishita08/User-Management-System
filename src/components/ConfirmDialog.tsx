import React from "react";

type Props = {
  message?: string;
  onCancel: () => void;
  onConfirm: () => void;
};

const ConfirmDialog: React.FC<Props> = ({ message = "Are you sure?", onCancel, onConfirm }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <p>{message}</p>
        <div className="form-actions">
          <button className="btn" onClick={onCancel}>Cancel</button>
          <button className="btn danger" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
