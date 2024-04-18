import {
  Control,
  ErrorOption,
  UseFormRegister,
  Controller,
} from "react-hook-form";
import ImageInput from "./ImageInput";
import TextInput from "./TextInput";

export default function ProfileInputs({
  register,
  errors,
  control,
}: {
  register: unknown;
  errors: any;
  control: any;
}) {
  let registerOption = {
    firstName: { required: "Can’t be empty" },
    lastName: { required: "Can’t be empty" },
    email: {
      pattern: {
        value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
        message: "Incorrect email format",
      },
    },
  };
  return (
    <div className="min-h-[600px] md:h-[580px] pb-6 overflow-auto flex flex-col gap-6">
      <Controller
        control={control}
        name="profilePic"
        render={({ field: { value, onChange, ...field } }) => {
          return <ImageInput value={value} onChange={onChange}></ImageInput>;
        }}
      ></Controller>

      <div className="flex flex-col gap-3 p-5 bg-LightGrey rounded-xl">
        <TextInput
          label="First name*"
          name="firstName"
          placeholder="e.g. John"
          register={register}
          error={errors.firstName}
          validation={registerOption.firstName}
        ></TextInput>
        <TextInput
          label="Last name*"
          name="lastName"
          placeholder="e.g. Appleseed"
          register={register}
          error={errors.lastName}
          validation={registerOption.lastName}
        ></TextInput>
        <TextInput
          type="email"
          label="Email"
          name="email"
          placeholder="e.g. email@example.com"
          register={register}
          error={errors.email}
          validation={registerOption.email}
        ></TextInput>
      </div>
    </div>
  );
}
