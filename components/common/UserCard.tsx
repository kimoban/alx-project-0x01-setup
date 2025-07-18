import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, company }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">
        <span className="font-semibold">Email:</span> {email}
      </p>
      <p className="text-gray-700 text-base">
        <span className="font-semibold">Phone:</span> {phone}
      </p>
      <div className="mt-4">
        <p className="text-gray-600">
          <span className="font-semibold">Company:</span> {company.name}
        </p>
        <p className="text-gray-600 italic">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;