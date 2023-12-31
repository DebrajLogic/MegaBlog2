/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/service";

const Card = ({ $id, featuredImage, title, date, description }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md mb-4 hover:scale-105 hover:bg-gray-200 cursor-pointer border border-gray-300">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className="w-full h-48 p-2 object-cover object-center rounded-t-md border-b border-l border-r border-gray-300"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600 text-sm mt-2">{date}</p>
          <p className="text-gray-700 mt-3">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
