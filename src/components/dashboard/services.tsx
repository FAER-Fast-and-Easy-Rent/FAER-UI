import React, { useState, useRef } from "react";
import { useRecoilValue } from "recoil";
import axios from "src/lib/axios";
import { userState } from "src/lib/states";
type Props = {};
type User = { user?: any; access?: any };

export default function Services({}: Props) {
  const [message, setMessage] = useState();
  const settings = [
    {
      title: "Room",
      component: <Room setMessage={setMessage} />,
    },
    {
      title: "Vehicle",
      component: <Vehicle />,
    },
  ];
  const [selected, setSelected] = useState(settings[0]);

  return (
    <div className="flex flex-col overflow-hidden rounded-lg">
      <div className="px-4 pt-5 sm:px-6 space-y-3">
        <div className="flex flex-row justify-between">
          <h3 className="text-xl leading-6 font-medium text-gray-900">
            Services
          </h3>
          <span className="text-right text-green-600 text-sm font-semibold">
            {" "}
            {message}
          </span>
        </div>
        <ul className="flex flex-row text-gray-500  text-base space-x-1">
          {settings?.map((item, k) => (
            <li
              key={k}
              onClick={() => setSelected(item)}
              className={`${
                item.title === selected.title
                  ? "border-b-2 border-gray-400 text-gray-600"
                  : ""
              } px-3 py-2 cursor-pointer`}
            >
              {item?.title}
            </li>
          ))}
        </ul>
      </div>
      {selected?.component}
    </div>
  );
}

const Room = ({ setMessage }) => {
  const user: User = useRecoilValue(userState);
  const Room = {
    title: "",
    price: "",
    description: "",
    home_type: "",
    room_type: "",
    total_occupancy: 0,
    total_bedrooms: 0,
    total_bathrooms: 0,
    is_furnished: false,
    has_kitchen: false,
    address: "",
  };

  const [room, setRoom] = useState(Room);
  const image = useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "is_furnished" || name == "has_kitchen") {
      setRoom((prevState) => ({
        ...prevState,
        [name]: !room[name],
      }));
    } else {
      setRoom((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(room, image.current.files[0], image.current.files[0].name);
    const formData = new FormData();
    for (var key in room) {
      formData.append(key, room[key]);
    }
    formData.append(
      "image",
      image.current.files[0],
      image.current.files[0].name
    );
    const userConfig = {
      headers: {
        Authorization: "Bearer " + user?.access,
      },
    };
    axios
      .post("/api/v1/rooms/", formData, userConfig)
      .then((res) => {
        console.log(res);
        setMessage("Success", res.statusText);
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
    setRoom(Room);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="border-t text-[15px] border-gray-200">
        <Input
          title="Title"
          type="text"
          name="title"
          value={room.title}
          handleChange={handleChange}
        />
        <Input
          title="Price"
          white={true}
          type="number"
          name="price"
          value={room.price}
          handleChange={handleChange}
        />
        <dl className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className=" font-medium text-gray-500">Description</dt>
          <dd className="mt-1  text-gray-900 sm:mt-0 sm:col-span-2">
            <textarea
              className="w-full px-3 py-2 border focus:outline-none focus:ring-1 focus:shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-lg"
              name="description"
              rows={6}
              value={room.description}
              onChange={handleChange}
              required
            />
          </dd>
        </dl>
        <Input
          title="Address"
          white={true}
          type="text"
          name="address"
          value={room.address}
          handleChange={handleChange}
        />
        <Input
          title="Home Type"
          type="text"
          name="home_type"
          value={room.home_type}
          handleChange={handleChange}
        />
        <Input
          title="Room Type"
          white={true}
          type="text"
          name="room_type"
          value={room.room_type}
          handleChange={handleChange}
        />
        <Input
          title="Total Occupancy"
          type="number"
          name="total_occupancy"
          value={room.total_occupancy}
          handleChange={handleChange}
        />
        <Input
          title="Total Bedrooms"
          white={true}
          type="number"
          name="total_bedrooms"
          value={room.total_bedrooms}
          handleChange={handleChange}
        />
        <Input
          title="Total Bathrooms"
          type="number"
          name="total_bathrooms"
          value={room.total_bathrooms}
          handleChange={handleChange}
        />
        <Input
          title="Is Furnished"
          white={true}
          type="checkbox"
          name="is_furnished"
          value={room.is_furnished}
          handleChange={handleChange}
        />
        <Input
          title="Has Kitchen"
          type="checkbox"
          name="has_kitchen"
          value={room.has_kitchen}
          handleChange={handleChange}
        />
        <dl className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className=" font-medium text-gray-500">Image</dt>
          <dd className="mt-1  text-gray-900 sm:mt-0 sm:col-span-2">
            <input
              className="w-full px-3 py-2 border focus:outline-none focus:ring-1 focus:shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-lg"
              name="image"
              type="file"
              ref={image}
              required
              accept="image/png, image/jpeg"
            />
          </dd>
        </dl>
      </div>
      <div className="bg-gray-200 px-3 py-2 text-right">
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-800/95 text-white text-sm px-3 py-2 font-normal tracking-wider rounded-lg"
        >
          Save
        </button>
      </div>
    </form>
  );
};

const Vehicle = () => {
  const [password, setPassword] = useState("password");
  const [type, setType] = useState("password");
  return (
    <>
      <div className="border-t text-[15px] border-gray-200 min-h-[20vh] bg-gray-50">
        <dl>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className=" font-medium text-gray-500">Password</dt>
            <dd className="mt-1 relative items-center flex text-gray-900 sm:mt-0 sm:col-span-2">
              <input
                className="w-full px-3 py-2 border focus:outline-none focus:ring-1 focus:shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-lg"
                type={type}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <svg
                className="w-6 h-6 absolute text-gray-500 right-2 items-center cursor-pointer hover:text-gray-600"
                fill="none"
                onClick={() =>
                  setType(type === "password" ? "text" : "password")
                }
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {type === "password" ? (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </>
                ) : (
                  <>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </>
                )}
              </svg>
            </dd>
          </div>
        </dl>
      </div>
      <div className="bg-gray-200 px-3 py-2 text-right">
        <button className="bg-gray-800 hover:bg-gray-800/95 text-white text-sm px-3 py-2 font-normal tracking-wider rounded-lg">
          Save
        </button>
      </div>
    </>
  );
};

const Input = ({ title, white = false, type, name, value, handleChange }) => (
  <dl
    className={`${
      white ? "bg-white" : "bg-gray-50"
    } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
  >
    <dt className=" font-medium text-gray-500">{title}</dt>
    <dd className="mt-1  text-gray-900 sm:mt-0 sm:col-span-2">
      <input
        className={`w-full px-3 py-2 border focus:outline-none ${
          type === "checkbox" ? "focus:ring-0" : "focus:ring-1 focus:shadow-sm"
        }  focus:ring-indigo-500 focus:border-indigo-500 rounded-lg`}
        type={type}
        name={name}
        min={0}
        value={value}
        onChange={handleChange}
        required={type != "checkbox"}
        checked={type == "checkbox" ? value : null}
      />
    </dd>
  </dl>
);
