import ImageInput from "./ImageInput";
import TextInput from "./TextInput";

export default function ProfileForm() {
  return (
    <form className="h-[600px] md:h-[580px] pb-6 overflow-auto flex flex-col gap-6">
      <ImageInput></ImageInput>

      <div className="flex flex-col gap-3 p-5 bg-LightGrey rounded-xl">
        <TextInput
          label="First name*"
          name="firstName"
          placeholder="e.g. John"
        ></TextInput>
        <TextInput
          label="Last name*"
          name="laseName"
          placeholder="e.g. Appleseed"
        ></TextInput>
        <TextInput
          type="email"
          label="Email"
          name="email"
          placeholder="e.g. email@example.com"
        ></TextInput>
      </div>
    </form>
  );
}
