import React, { useState, useRef } from "react";
import { useRecoilValue } from "recoil";
import axios from "src/lib/axios";
import { userState } from "src/lib/states";
import AllServices from "./all_services";
type Props = {};
type User = { user?: any; access?: any };

export default function Services({}: Props) {
  const [message, setMessage] = useState();
  const settings = [
    {
      title: "All Services",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      component: <AllServices />,
    },
    {
      title: "Room",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      component: <Room setMessage={setMessage} />,
    },
    {
      title: "Vehicle",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      component: <Vehicle setMessage={setMessage} />,
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
          <span className="text-right text-green-600 text-sm font-semibold transition-all">
            {" "}
            {message}
          </span>
        </div>
        <ul className="flex flex-row text-gray-500  text-base space-x-4">
          {settings?.map((item, k) => (
            <li
              key={k}
              onClick={() => setSelected(item)}
              className={`${
                item.title === selected.title
                  ? " border-gray-400 text-gray-700"
                  : "border-white"
              } px-3 py-2 border-b-2 cursor-pointer flex space-x-2 items-center`}
            >
              <span>{item?.icon}</span>
              <span>{item?.title}</span>
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
    var start = new Date().getTime();

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
        var end = new Date().getTime();
        var time = end - start;
        setMessage("Room has been created. | Execution time: " + time + " ms");
        e.target.reset();
        setRoom(Room);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      setMessage();
    }, 20000);
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
          className="bg-gray-800 hover:bg-gray-800/90 hover:shadow-md text-white text-sm px-3 py-2 font-normal tracking-wider rounded-lg"
        >
          Save
        </button>
      </div>
    </form>
  );
};

const Vehicle = ({ setMessage }) => {
  const Vehicle = {
    name: "",
    price: "",
    description: "",
    capacity: 0,
    vehicle_type: "",
    brand: "",
    model: "",
  };
  const user: User = useRecoilValue(userState);

  const [vehicle, setVehicle] = useState(Vehicle);
  const image = useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var start = new Date().getTime();

    console.log(vehicle, image.current.files[0], image.current.files[0].name);
    const formData = new FormData();
    for (var key in vehicle) {
      formData.append(key, vehicle[key]);
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
      .post("/api/v1/vehicles/", formData, userConfig)
      .then((res) => {
        console.log(res);
        var end = new Date().getTime();
        var time = end - start;
        setMessage(
          "Vehicle has been created. | Execution time: " + time + " ms"
        );
        e.target.reset();
        setVehicle(Vehicle);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      setMessage();
    }, 20000);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="border-t text-[15px] border-gray-200">
        <Input
          title="Title"
          type="text"
          name="name"
          value={vehicle.name}
          handleChange={handleChange}
        />
        <Input
          title="Price"
          white={true}
          type="number"
          name="price"
          value={vehicle.price}
          handleChange={handleChange}
        />
        <dl className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className=" font-medium text-gray-500">Description</dt>
          <dd className="mt-1  text-gray-900 sm:mt-0 sm:col-span-2">
            <textarea
              className="w-full px-3 py-2 border focus:outline-none focus:ring-1 focus:shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-lg"
              name="description"
              rows={6}
              value={vehicle.description}
              onChange={handleChange}
              required
            />
          </dd>
        </dl>
        <Input
          title="Capacity"
          white={true}
          type="number"
          name="capacity"
          value={vehicle.capacity}
          handleChange={handleChange}
        />
        <Input
          title="Vehicle Type"
          type="text"
          name="vehicle_type"
          value={vehicle.vehicle_type}
          handleChange={handleChange}
        />
        <Input
          title="Brand"
          white={true}
          type="text"
          name="brand"
          value={vehicle.brand}
          handleChange={handleChange}
        />
        <Input
          title="Model"
          type="text"
          name="model"
          value={vehicle.model}
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
          className="bg-gray-800 hover:bg-gray-800/90 hover:shadow-md text-white text-sm px-3 py-2 font-normal tracking-wider rounded-lg"
        >
          Save
        </button>
      </div>
    </form>
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
