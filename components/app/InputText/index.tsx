import { InputIcon } from "../InputIcon";
import React from "react";

type InputTextProps = {
  label: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
};

export function InputText({ ...props }: InputTextProps) {
  return (
      <div className="flex mb-14 gap-7 items-center">
        <div className="w-[64px] h-[64px] mr-6 rounded-xl bg-[#edecf5] flex justify-center items-center">
          <InputIcon size={24} color="#503e9d" />
        </div>
        <div className="grow">
          <label className="text-xs text-gray-700 font-bold uppercase tracking-wider">
            {props.label}
          </label>
          <input
              className="w-full py-3 border-b text-xl focus:border-indigo-500 focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
              type={props.type}
              placeholder={props.placeholder}
              value={props.value}
              onChange={props.onChange}
              required={props.required}
              disabled={props.disabled}
          />
        </div>
      </div>
  );
}
