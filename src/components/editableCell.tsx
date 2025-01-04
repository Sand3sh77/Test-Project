import { useState } from "react";

const EditableCell = ({
  value,
  onValueChange,
}: {
  value: any;
  onValueChange: (updatedValue: any) => void;
}) => {
  const [name, setName] = useState(value.name);
  const [email, setEmail] = useState(value.email);
  const [desc, setDesc] = useState(value.desc);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    const updatedValue = { ...value, name: e.target.value, email, desc };
    onValueChange(updatedValue);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const updatedValue = { ...value, name, email: e.target.value, desc };
    onValueChange(updatedValue);
  };

  const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
    const updatedValue = { ...value, name, email, desc: e.target.value };
    onValueChange(updatedValue);
  };

  const handleBlur = () => {};

  return (
    <div className="flex items-center justify-between gap-[20px] h-full px-4 py-2">
      <div className="flex items-center gap-[4px] h-full">
        <img
          src={value.avatar}
          alt={value.name}
          style={{
            width: 28,
            height: 28,
            borderRadius: "4px",
          }}
        />
        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            onBlur={handleBlur}
            className="text-xs text-[#344054] border-none outline-none"
          />
          {email && (
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleBlur}
              className="text-xs text-[#344054] border-none outline-none"
            />
          )}
          {desc && (
            <input
              type="text"
              value={desc}
              onChange={handleDescChange}
              onBlur={handleBlur}
              className="text-xs text-[#344054] border-none outline-none"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EditableCell;
