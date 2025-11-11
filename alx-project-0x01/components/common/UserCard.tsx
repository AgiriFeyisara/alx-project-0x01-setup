import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {name} ({username})
      </h2>
      <p className="text-gray-600 mb-1">Email: {email}</p>
      <p className="text-gray-600 mb-1">
        Address: {address.suite}, {address.street}, {address.city}, {address.zipcode}
      </p>
      <p className="text-gray-600 mb-1">Phone: {phone}</p>
      <p className="text-gray-600 mb-1">Website: {website}</p>
      <p className="text-gray-600 mb-1">
        Company: {company.name} - {company.catchPhrase}
      </p>
      <div className="text-sm text-gray-500 mt-2">User ID: {id}</div>
    </div>
  );
};

export default UserCard;
