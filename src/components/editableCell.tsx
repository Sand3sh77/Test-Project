import { useState, useEffect } from "react";

const EditableCell = ({
  params,
  onValueChange,
}: {
  params: any;
  onValueChange: (updatedValue: any) => void;
}) => {
  const [editableValue, setEditableValue] = useState(params.value);

  useEffect(() => {
    setEditableValue(params.value);
  }, [params.value]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setEditableValue((prev: any) => ({
      ...prev,
      [field]: e.target.value,
    }));
    onValueChange(editableValue);
  };

  return (
    <div className="flex items-center gap-[4px] px-4 py-2">
      <img
        src={editableValue.avatar}
        alt={editableValue.name}
        style={{
          width: 28,
          height: 28,
          borderRadius: "4px",
        }}
      />
      <div className="flex flex-col justify-center">
        <input
          type="text"
          value={editableValue.name}
          onChange={(e) => handleChange(e, "name")}
          className="text-xs text-[#344054] border-none outline-none"
        />
        {editableValue.email && (
          <input
            type="email"
            value={editableValue.email}
            onChange={(e) => handleChange(e, "email")}
            className="text-xs text-[#344054] border-none outline-none"
          />
        )}
        {editableValue.desc && (
          <input
            type="text"
            value={editableValue.desc}
            onChange={(e) => handleChange(e, "desc")}
            className="text-xs text-[#344054] border-none outline-none"
          />
        )}
      </div>
    </div>
  );
};

export default EditableCell;
