import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { User } from "../types/User";

interface FormValues {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  companyName?: string;
}

interface Props {
  initial?: User | null;
  onCancel: () => void;
  onSave: (user: FormValues) => void;
}

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().optional(),
  companyName: yup.string().optional(),
});

const UserForm: React.FC<Props> = ({ initial, onCancel, onSave }) => {
  const { register, handleSubmit, formState: { errors }, reset } =
    useForm<FormValues>({
      resolver: yupResolver(schema) as any,
      defaultValues: initial || {},
    });

  useEffect(() => {
    reset(initial || {});
  }, [initial, reset]);

  const submit: SubmitHandler<FormValues> = (data) => {
    onSave(data);
  };

  return (
    <div className="modal">
      <div className="modal-box">
        <h3>{initial ? "Edit User" : "Create User"}</h3>

        <form onSubmit={handleSubmit(submit)} className="form-stack">

          <div>
            <input {...register("name")} placeholder="Name" />
            <p className="error">{errors.name?.message}</p>
          </div>

          <div>
            <input {...register("email")} placeholder="Email" />
            <p className="error">{errors.email?.message}</p>
          </div>

          <div>
            <input {...register("phone")} placeholder="Phone" />
          </div>

          <div>
            <input {...register("companyName")} placeholder="Company Name" />
          </div>

          <div className="flex gap-2 mt-4">
            <button type="submit" className="btn-primary">
              {initial ? "Save Changes" : "Add User"}
            </button>
            <button type="button" onClick={onCancel} className="btn-secondary">
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default UserForm;
